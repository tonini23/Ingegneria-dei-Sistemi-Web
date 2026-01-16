import { Request, Response } from 'express';
import { connection } from '../utils/db'; 
import { QueryError, RowDataPacket } from 'mysql2';

async function allPrenotazioni(req: Request, res: Response) {
    const userId = req.params.id;

    // Aggiungiamo la JOIN con la tabella 'materie'
    // Assumiamo che la tabella si chiami 'materie' e abbia un campo 'nome'
    // e che in 'prenotazioni' ci sia la chiave esterna 'id_materia'
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
    const userId = req.params.id;
    const { id_tutor, id_materia, data_prenotazione } = req.body;
    const sql = `
        INSERT INTO prenotazioni (id_studente, id_tutor, id_materia, data_prenotazione)
        VALUES (?, ?, ?, ?)
    `;
    connection.query(
        sql,
        [userId, id_tutor, id_materia, data_prenotazione],
        function (error: QueryError | null, results: RowDataPacket[], fields: any) {
            if (error) {
                console.error("Errore DB:", error);
                res.status(500).send('Errore del server');
            } else {
                res.json({ message: "Prenotazione aggiunta con successo" });
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



export { allPrenotazioni, addPrenotazione, deletePrenotazione };