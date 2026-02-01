import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

// Rotte di autenticazione
router.post('/api/auth/registrazione', authController.registrazione);
router.post('/api/auth/login', authController.login);
router.post('/api/auth/logout', authController.logout);
router.get('/api/auth/utente', authController.getProfile);
router.put('/api/utenti/:id', authController.updateUtente);

export { router as authRouter };