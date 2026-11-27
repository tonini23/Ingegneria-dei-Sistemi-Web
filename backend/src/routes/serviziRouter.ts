import express from 'express';
import * as serviziController from '../controllers/serviziController';

const router = express.Router();

router.post('/api/upload', serviziController.uploadFile);
router.post('/api/servizi/esterno', serviziController.chiamaServizioEsterno);

export { router as serviziRouter };
