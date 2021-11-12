import express from 'express';
import clientController from '../public/api/controlller/clientController';

const router = express.Router();

router.get('/client', clientController.index);
router.get('/client/:id', clientController.index);
router.post('/client', clientController.store);

export default router;
