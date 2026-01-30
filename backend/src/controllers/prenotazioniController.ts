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

    console.log("aaaaaaaaaaaaaaaaaaa");
    const utenteLoggato = GetUtente(req, res);
    console.log("bbbbbbbbbbbbbbbbbbb");


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
async function searchDisponibilita(req: Request, res: Response) {
    const { data, id_materia, id_tutor, luogo } = req.query;

    console.log("Ricerca disponibilità:", req.query);

    // Query sulla tabella 'disponibilita' (non prenotazioni)
    // Mostriamo il nome del tutor e la materia
    let sql = `
        SELECT 
            p.Id, p.Data, p.Ora, p.Localita,
            m.Nome as materia_nome,
            u.Nome as tutor_nome, u.Cognome as tutor_cognome
        FROM prenotazioni p
        JOIN materie m ON p.id_materia = m.Id
        JOIN utenti u ON p.id_tutor = u.Id
        WHERE 1=1
    `;

    const params: any[] = [];

    // --- VINCOLO RICHIESTO: La data non deve essere futura ---
    // (Mostra solo disponibilità di oggi o passate)
    sql += ` AND d.Data <= CURDATE() `;

    // Filtri opzionali (se l'utente li ha selezionati)
    if (data) {
        sql += ` AND d.Data = ?`;
        params.push(data);
    }
    if (id_materia) {
        sql += ` AND d.id_materia = ?`;
        params.push(id_materia);
    }
    if (id_tutor) {
        sql += ` AND d.id_tutor = ?`;
        params.push(id_tutor);
    }
    if (luogo) {
        sql += ` AND d.Localita LIKE ?`;
        params.push(`%${luogo}%`);
    }

    connection.query(sql, params, (error: QueryError | null, results: RowDataPacket[]) => {
        if (error) {
            console.error("Errore ricerca disponibilità:", error);
            res.status(500).send('Errore del server');
        } else {
            res.json(results);
        }
    });
}




export { allPrenotazioni, addPrenotazione, deletePrenotazione, searchDisponibilita };