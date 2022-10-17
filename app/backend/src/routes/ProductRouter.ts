import { Router } from 'express';
import ProductFactory from '../factories/ProductFactory';
import validateRouteToken from '../middlewares/validateRouteToken';

const router = Router();

router.get('/products', validateRouteToken,
  (req, res) => ProductFactory().getProducts(req, res));

export default router;