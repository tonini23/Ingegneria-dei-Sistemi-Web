import { Request, Response } from 'express';
import { connection } from '../utils/db'; 
import { QueryError, RowDataPacket } from 'mysql2';

async function allPrenotazioni(req: Request, res: Response) {
    const userId = req.params.id; 
    const sql = 'SELECT * FROM prenotazioni WHERE id_studente = ? OR id_tutor = ?';

    connection.query(
        sql,
        [userId, userId], 
        function (error: QueryError | null, results: RowDataPacket[], fields: any) {
            if (error) {
                console.error("Errore DB:", error);
                res.status(500).send('Errore del server');
            } else {
               
                console.log("Risultati trovati:", results); 
                res.json(results);
            }
        }
    );
}

export { allPrenotazioni };