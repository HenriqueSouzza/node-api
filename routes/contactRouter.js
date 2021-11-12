import express from 'express';
import contactController from '../public/api/controlller/contactController';

const router = express.Router();

router.get('/contact', contactController.index);
router.get('/contact/:id', contactController.index);
router.post('/contact', contactController.store);

export default router;
