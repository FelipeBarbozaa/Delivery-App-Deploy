import { Router } from 'express';
import ProductFactory from '../factories/ProductFactory';

const router = Router();

router.get('/products', (req, res) => ProductFactory().getProducts(req, res));

export default router;