import { Request, Response } from 'express';
import { connection } from '../utils/db'; 
import { QueryError, RowDataPacket } from 'mysql2';

// Manteniamo 'async' come nel tuo file originale
async function allPrenotazioni(req: Request, res: Response) {
    
    // Usiamo la tua logica corretta con il parametro ?
    connection.query(
        'SELECT * FROM prenotazioni WHERE Id = ?',
        [req.params.id], 
        function (error: QueryError | null, results: RowDataPacket[], fields: any) {
            if (error) {
                console.error("Errore DB:", error); // È utile loggare l'errore nel server
                res.status(500).send('Errore del server');
            } else {
                res.json(results);
            }
        }
    );
}

export { allPrenotazioni };