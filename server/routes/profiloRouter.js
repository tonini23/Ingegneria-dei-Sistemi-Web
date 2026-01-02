import express from 'express';

import * as profiloController from '../controllers/profiloController.js';

const router = express.Router();

router.get('/api/prenotazioni', profiloController.allPrenotazioni);


export { router as profiloRouter };