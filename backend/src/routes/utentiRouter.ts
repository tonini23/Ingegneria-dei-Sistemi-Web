import express from 'express';
import * as utentiController from '../controllers/utentiController';

const router = express.Router();

router.get('/api/utenti', utentiController.getAllUtenti);

export { router as utentiRouter };