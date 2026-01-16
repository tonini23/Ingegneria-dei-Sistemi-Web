import express from 'express';
import * as prenotazioniController from '../controllers/prenotazioniController';

const router = express.Router();

router.get('/api/prenotazioni/:id', prenotazioniController.allPrenotazioni);
router.post('/api/prenotazioni/:id', prenotazioniController.addPrenotazione);
router.delete('/api/prenotazioni/:id', prenotazioniController.deletePrenotazione);


export { router as prenotazioniRouter };