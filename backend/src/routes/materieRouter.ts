import express from 'express';
import * as materieController from '../controllers/materieController';

const router = express.Router();

router.get('/api/materie', materieController.getAllMaterie);

export { router as materieRouter };