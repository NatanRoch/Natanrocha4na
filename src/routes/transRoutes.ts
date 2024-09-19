import { Router } from 'express';
import { getTransaction, addTransaction } from '../controllers/transController';

const router = Router();

router.get('/actions', getTransaction);
router.post('/actions', addTransaction);

export default router;
