import express from 'express';
import * as prenotazioniController from '../controllers/prenotazioniController';

const router = express.Router();
router.get('/api/prenotazioni/:id', prenotazioniController.allPrenotazioni);

export { router as prenotazioniRouter };