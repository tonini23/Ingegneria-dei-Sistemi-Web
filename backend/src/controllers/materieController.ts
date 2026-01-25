import { Request, Response } from 'express';
import { connection } from '../utils/db';
import { QueryError, RowDataPacket } from 'mysql2';

export const getAllMaterie = (req: Request, res: Response) => {
    const sql = 'SELECT * FROM materie';

    connection.query(sql, (error: QueryError | null, results: RowDataPacket[]) => {
        if (error) {
            console.error("Errore recupero materie:", error);
            res.status(500).send('Errore del server');
        } else {
            res.json(results);
        }
    });
};