import { Request, Response } from 'express';
import { connection } from '../utils/db';
import { QueryError, RowDataPacket } from 'mysql2';

export const getAllUtenti = (req: Request, res: Response) => {
    const sql = 'SELECT Id, Nome, Cognome FROM utenti';

    connection.query(sql, (error: QueryError | null, results: RowDataPacket[]) => {
        if (error) {
            console.error("Errore recupero utenti:", error);
            res.status(500).send('Errore del server');
        } else {
            res.json(results);
        }
    });
};

// Endpoint amministrativi (intenzionalmente senza controlli di autorizzazione lato server)
export const getAdminUtenti = (req: Request, res: Response) => {
    const sql = 'SELECT Id, Nome, Cognome, Matricola, Email, Ruolo FROM utenti';

    connection.query(sql, (error: QueryError | null, results: RowDataPacket[]) => {
        if (error) {
            console.error("Errore recupero utenti admin:", error);
            res.status(500).send('Errore del server');
        } else {
            res.json(results);
        }
    });
};

export const updateRuoloUtente = (req: Request, res: Response) => {
    const { id } = req.params;
    const { ruolo } = req.body;
    const sql = `UPDATE utenti SET Ruolo = '${ruolo}' WHERE Id = ${id}`;

    connection.query(sql, (error: QueryError | null) => {
        if (error) {
            console.error("Errore aggiornamento ruolo:", error);
            res.status(500).send('Errore del server');
        } else {
            res.json({ message: 'Ruolo aggiornato' });
        }
    });
};

export const deleteUtente = (req: Request, res: Response) => {
    const { id } = req.params;
    const sql = `DELETE FROM utenti WHERE Id = ${id}`;

    connection.query(sql, (error: QueryError | null) => {
        if (error) {
            console.error("Errore eliminazione utente:", error);
            res.status(500).send('Errore del server');
        } else {
            res.json({ message: 'Utente eliminato' });
        }
    });
};