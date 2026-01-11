import express, { Express } from "express";
import type { Request, Response, NextFunction } from 'express'; // <--- Nota "import type" e la riga separata
import { prenotazioniRouter } from './routes/prenotazioniRouter'; 

const app: Express = express()
const port: number = 3001 // Per convenzione sarebbe 3000 ma per problemi personali uso 3001

app.use(express.static('public'));
app.use(express.static('dist-frontend')); 
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'public' });
});

app.use('/', prenotazioniRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Pagina non trovata');
}); 

app.listen(port, () => {
    console.log('Server in ascolto alla porta ' + port);
}); 