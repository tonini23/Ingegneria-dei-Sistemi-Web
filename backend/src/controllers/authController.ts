import { Request, Response } from 'express';
import { connection } from '../utils/db'; 
import { QueryError, RowDataPacket } from 'mysql2';
import { SetUtente, UnsetUtente, Utente, GetUtente } from '../utils/auth';
import bcrypt from 'bcrypt';


export const registrazione = async (req: Request, res: Response) => {
    const utente = GetUtente(req, res);
    if (utente) {
        res.status(401).json({ message: 'Questa operazione richiede il logout' });
        return;
    }

    const { nome, cognome, matricola, email, password} = req.body;

    const [utenti] = await connection.promise().execute(
        'SELECT email FROM utenti WHERE email = ? ', [email]);

    if (Array.isArray(utenti) && utenti.length > 0) {
        res.status(400).json({ message: 'Email già registrata' });
        return;
    }
    /*const [matricole] = await connection.promise().execute(
        'SELECT matricola FROM utenti WHERE matricola = ? ', [matricola]);

    if (Array.isArray(matricole) && matricole.length > 0) {
        res.status(400).json({ message: 'Matricola già registrata' });
        return;
    }*/

    const passwordHash = await bcrypt.hash(password, 10);

    await connection.promise().execute(
        'INSERT INTO utenti (nome, cognome, matricola, email, password) VALUES (?, ?, ?, ?, ?)',
        [nome, cognome, matricola, email, passwordHash]
    );

    const [results] = await connection.promise().execute(
        'SELECT * FROM utenti WHERE email = ?', [email]);
    const newUtente = (results as Utente[])[0];

    SetUtente(req, res, newUtente);

    res.json({ message: 'Utente registrato con successo', user: newUtente });
};

export const login = async (req: Request, res: Response) => {
     const utente = GetUtente(req, res);
    if (utente) {
        res.status(401).json({ message: 'Questa operazione richiede il logout' });
        return;
    }

    const { email, password } = req.body;

    const [results] = await connection.promise().execute(
        'SELECT * FROM utenti WHERE email = ? ', [email]);

    if(!Array.isArray(results) || results.length === 0) {
        res.status(400).json({ message: 'Email o password non validi' });
        return;
    }

    const utenteData = results[0] as any;

    const correctPassword = await bcrypt.compare(password, utenteData.Password);

    if (!correctPassword) {
        res.status(400).json({ message: 'Email o password non validi' });
        return;
    }// non segnaliamo il tipo di errore per motivi di sicurezza

    delete utenteData.Password; 

    SetUtente(req, res, utenteData);
    
    res.json({ message: 'Login effettuato con successo'});
    
};

export const logout = async (req: Request, res: Response) => {
     const utente = GetUtente(req, res);
    if (!utente) {
        res.status(401).json({ message: 'Questa operazione richiede il login' });
        return;
    }

    UnsetUtente(req, res);

    res.json({ message: 'Logout effettuato con successo' });
};

export const getProfile = async (req: Request, res: Response) => {
    // 1. Recupera i dati decodificati dal cookie
    const utente = GetUtente(req, res);
    
    // 2. Se il cookie non c'è o è scaduto, restituisci errore 401
    if (!utente) {
        res.status(401).json({ message: "Nessun utente loggato" });
        return;
    }

    // 3. FONDAMENTALE: Restituisci l'oggetto utente (che contiene Id, Nome, ecc.)
    res.json(utente); 
};
