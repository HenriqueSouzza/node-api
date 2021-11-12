import express from 'express';
import contactRouter from './contactRouter';
import clientRouter from './clientRouter';

const router = express.Router();

router.use(contactRouter);
router.use(clientRouter);

export default router;
