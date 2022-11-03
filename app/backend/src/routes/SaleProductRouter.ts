import { Router } from 'express';
import SaleProductFactory from '../factories/SaleProductFactory';
import validateRouteToken from '../middlewares/validateRouteToken';

const router = Router();

router.post(
  '/saleProduct', validateRouteToken,
  (req, res) => SaleProductFactory().create(req, res));
router.get('/saleDetails/:id', validateRouteToken,
  (req, res) => SaleProductFactory().getBySaleId(req, res));

export default router;