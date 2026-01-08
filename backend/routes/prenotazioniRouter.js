import express from 'express';

import * as prenotazioniController from '../controllers/prenotazioniController.js';

const router = express.Router();

router.get('/api/prenotazioni', prenotazioniController.allPrenotazioni);

export { router as prenotazioniRouter };