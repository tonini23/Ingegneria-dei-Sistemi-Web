import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

export interface Utente {
    Id: number;
    Nome: string;      
    Cognome: string;   
    Matricola: number; 
    Email: string;
    Password: string;
}

const JWT_SECRET = 'il_mio_segreto_jwt_studibo';
const COOKIE_NAME = 'studibo_token';

export const SetUtente = (req: Request, res: Response, utente: any) => {
    const accessToken = jwt.sign( utente, JWT_SECRET, { expiresIn: '1d' } )
    res.cookie(COOKIE_NAME, accessToken, {
        maxAge: 86_400_000,
        httpOnly: true,
        sameSite: true,

    });
}
export const GetUtente = (req: Request, res: Response) => {
    const accessToken = req.cookies[COOKIE_NAME];
    if (!accessToken) return null;
    try {
        const utente = jwt.verify(accessToken, JWT_SECRET) as Utente;
        return utente;
    } catch (err) {
        return null;
    }
}

export const UnsetUtente = (req: Request, res: Response) => {
    res.clearCookie(COOKIE_NAME);
}