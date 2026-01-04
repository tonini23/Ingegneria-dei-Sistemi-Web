import express from 'express';

import * as profiloController from '../controllers/studenteController.js';

const router = express.Router();

router.get('/api/prenotazioni', studenteController.allPrenotazioni);

export { router as studenteRouter };