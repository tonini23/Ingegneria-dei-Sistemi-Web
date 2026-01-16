import { Request, Response } from 'express';
import { connection } from '../utils/db'; 
import { QueryError, RowDataPacket } from 'mysql2';

export const register = async (req: Request, res: Response) => {
    
    const { email, password} = req.body;

    await connection.execute(
        'INSERT INTO utenti (email, password) VALUES (?, ?)',
        [email, password]
    );

    const [results] = await connection.execute('SELECT * FROM utenti WHERE email = ?', [email]);
};