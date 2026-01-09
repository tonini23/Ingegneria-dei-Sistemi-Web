import express from 'express';

import * as prenotazioniController from '../controllers/prenotazioniController';

const router = express.Router();

// Definisci la rotta (assicurati che il percorso dell'URL sia quello che ti serve)
router.get('/api/prenotazioni', prenotazioniController.allPrenotazioni);

// Esportiamo il router con il nome che usi in app.ts
export { router as prenotazioniRouter };