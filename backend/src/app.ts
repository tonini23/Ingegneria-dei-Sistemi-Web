import express, { Express } from "express";
import type { Request, Response, NextFunction } from 'express'; // <--- Nota "import type" e la riga separata
import { prenotazioniRouter } from './routes/prenotazioniRouter'; 

const app: Express = express()
const port: number = 3001 // Per convenzione sarebbe 3000 

// Nota: 'public' si riferisce alla vecchia cartella. 
// Quando useremo Vite, questo dovrà cambiare o sparire, ma per ora lascialo così.
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true }));

// Qui aggiungiamo i tipi : Request e : Response
app.get('/', (req: Request, res: Response) => {
    // Nota: anche questo path potrebbe dover cambiare con la nuova struttura
    res.sendFile('index.html', { root: 'public' });
});

app.use('/', prenotazioniRouter);

// Qui aggiungiamo anche NextFunction
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Pagina non trovata');
}); 

app.listen(port, () => {
    console.log('Server in ascolto alla porta ' + port);
}); 