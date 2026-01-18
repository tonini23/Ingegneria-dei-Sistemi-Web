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