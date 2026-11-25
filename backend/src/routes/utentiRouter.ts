import express from 'express';
import * as utentiController from '../controllers/utentiController';

const router = express.Router();

router.get('/api/utenti', utentiController.getAllUtenti);
router.get('/api/admin/utenti', utentiController.getAdminUtenti);
router.put('/api/admin/utenti/:id/ruolo', utentiController.updateRuoloUtente);
router.delete('/api/admin/utenti/:id', utentiController.deleteUtente);

export { router as utentiRouter };