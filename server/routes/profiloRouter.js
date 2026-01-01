import express from 'express';

import * as profiloController from '../controllers/profiloController.js';

const router = express.Router();

//router.get('/profilo', profiloController.allPrenotazioniUtente);

export { router as profiloRouter };