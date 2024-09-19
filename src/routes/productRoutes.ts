import { Router } from 'express';
import { getProduct, addProduct } from '../controllers/productController';

const router = Router();

router.get('/product', getProduct);
router.post('/product', addProduct);

export default router;