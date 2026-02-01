import express from 'express';
import * as prenotazioniController from '../controllers/prenotazioniController';

const router = express.Router();

router.get('/api/prenotazioni/:id', prenotazioniController.allPrenotazioni);
router.post('/api/prenotazioni', prenotazioniController.addPrenotazione);
router.put('/api/prenotazioni/:id/prenota', prenotazioniController.prenotaLezione);
router.get('/api/disponibilita/cerca', prenotazioniController.cercaDisponibilita);
router.post('/api/prenotazioni/prenota/:id', prenotazioniController.prenotaLezione);
router.delete('/api/prenotazioni/:id', prenotazioniController.deletePrenotazione);


export { router as prenotazioniRouter };