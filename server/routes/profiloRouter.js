import express from 'express';

import * as profiloController from '../controllers/profiloController.js';

const router = express.Router();

router.get('/profilo', profiloController.getProfilo);

export { router as profiloRouter };