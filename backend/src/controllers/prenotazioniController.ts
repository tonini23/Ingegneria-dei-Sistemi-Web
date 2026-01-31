import { Request, Response } from 'express';
import { connection } from '../utils/db'; 
import { QueryError, RowDataPacket } from 'mysql2';
import { GetUtente } from '../utils/auth';

async function allPrenotazioni(req: Request, res: Response) {
    const userId = req.params.id;

    // Aggiungiamo la JOIN con la tabella 'materie'
    const sql = `
        SELECT 
            p.*, 
            u.nome AS nome_studente, 
            u.cognome AS cognome_studente,
            m.nome AS materia_nome
        FROM prenotazioni p
        JOIN utenti u ON p.id_studente = u.id
        JOIN materie m ON p.id_materia = m.id
        WHERE p.id_studente = ? OR p.id_tutor = ?
    `;

    connection.query(
        sql,
        [userId, userId], 
        function (error: QueryError | null, results: RowDataPacket[], fields: any) {
            if (error) {
                console.error("Errore DB:", error);
                res.status(500).send('Errore del server');
            } else {
                res.json(results);
            }
        }
    );
}


async function addPrenotazione(req: Request, res: Response) {
    // Prendiamo l'ID dal Token

    const utenteLoggato = GetUtente(req, res);


    if (!utenteLoggato) {
        res.status(401).json({ message: 'Devi essere loggato come Tutor.' });
        return;
    }

    const { id_materia, data, ora, localita } = req.body;
    const tutorId = utenteLoggato.Id; // Usiamo l'ID reale

    console.log("Inserimento in prenotazioni:", { tutorId, id_materia, data, ora, localita });

    // Query di inserimento nella tabella 'prenotazioni'
    const sql = `
        INSERT INTO prenotazioni (id_tutor, id_materia, Data, Ora, Localita)
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [tutorId, id_materia, data, ora, localita],
        function (error: QueryError | null, results: RowDataPacket[]) {
            if (error) {
                console.error("Errore DB:", error);
                res.status(500).send('Errore salvataggio prenotazione');
            } else {
                res.json({ message: "Prenotazione creata con successo" });
            }
        }
    );
}

async function deletePrenotazione(req: Request, res: Response) {
    const userId = req.params.id;

    const sql = `
        DELETE FROM prenotazioni
        WHERE id_studente = ?
    `;

    connection.query(
        sql,
        [userId],
        function (error: QueryError | null, results: RowDataPacket[], fields: any) {
            if (error) {
                console.error("Errore DB:", error);
                res.status(500).send('Errore del server');
            } else {
                res.json({ message: "Prenotazione eliminata con successo" });
            }
        }
    );
}

async function cercaDisponibilita(req: Request, res: Response) {
    const { data, id_materia, id_tutor, localita } = req.query;
    
    // Ottieni l'utente corrente per escludere le sue prenotazioni (se è un tutor)
    const utenteLoggato = GetUtente(req, res);
    
    // Query: Seleziona tutto da prenotazioni dove NON c'è ancora uno studente
    let sql = `
        SELECT 
            p.Id, p.Data, p.Ora, p.Localita, p.id_tutor,
            m.Nome as materia_nome,
            u.Nome as tutor_nome, u.Cognome as tutor_cognome
        FROM prenotazioni p
        JOIN materie m ON p.id_materia = m.Id
        JOIN utenti u ON p.id_tutor = u.Id
        WHERE p.id_studente IS NULL
    `;

    const params: any[] = [];

    // ESCLUDI le prenotazioni create dal tutor corrente
    if (utenteLoggato && utenteLoggato.Id) {
        sql += ` AND p.id_tutor != ?`;
        params.push(utenteLoggato.Id);
    }

    // Filtri opzionali
    if (data) { 
        sql += ` AND p.Data = ?`; 
        params.push(data); 
    }
    if (id_materia) { 
        sql += ` AND p.id_materia = ?`; 
        params.push(id_materia); 
    }
    if (id_tutor) { 
        sql += ` AND p.id_tutor = ?`; 
        params.push(id_tutor); 
    }
    // AGGIUNTO FILTRO LOCALITÀ
    if (localita) { 
        sql += ` AND p.Localita LIKE ?`; 
        params.push(`%${localita}%`); // Usa LIKE per ricerca parziale
    }

    // Ordina per data e ora più vicine
    sql += ` ORDER BY p.Data ASC, p.Ora ASC`;

    connection.query(sql, params, (err, results) => {
        if (err) {
            console.error("Errore ricerca:", err);
            res.status(500).send('Errore server durante la ricerca');
        } else {
            res.json(results);
        }
    });
}


// PRENOTA LA LEZIONE (Aggiorna id_studente)
async function prenotaLezione(req: Request, res: Response) {
    const utenteLoggato = GetUtente(req, res);
    const id_prenotazione = req.params.id; // L'ID della lezione da prenotare

    if (!utenteLoggato) {
        res.status(401).json({ message: "Devi essere loggato per prenotare." });
        return;
    }

    // Controlliamo che la lezione sia ancora libera
    const checkSql = "SELECT * FROM prenotazioni WHERE Id = ? AND id_studente IS NULL";
    
    connection.query(checkSql, [id_prenotazione], (err, results: any) => {
        if (err || results.length === 0) {
            res.status(400).json({ message: "Lezione non disponibile o inesistente." });
            return;
        }

        // Se è libera, assegniamo lo studente
        const updateSql = "UPDATE prenotazioni SET id_studente = ? WHERE Id = ?";
        connection.query(updateSql, [utenteLoggato.Id || utenteLoggato.Id, id_prenotazione], (errUpdate) => {
            if (errUpdate) {
                console.error(errUpdate);
                res.status(500).json({ message: "Errore durante la prenotazione." });
            } else {
                res.json({ message: "Prenotazione confermata con successo!" });
            }
        });
    });
}




export { allPrenotazioni, addPrenotazione, deletePrenotazione, cercaDisponibilita, prenotaLezione };