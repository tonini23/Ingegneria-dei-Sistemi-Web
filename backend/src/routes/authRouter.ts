import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/api/auth/register', authController.register);
router.post('/api/auth/login', authController.login);
router.post('/api/auth/logout', authController.logout);
router.get('/api/auth/utente', authController.getProfile);
//router.get('/api/auth/cancella', authController.deleteProfile);

export { router as authRouter };