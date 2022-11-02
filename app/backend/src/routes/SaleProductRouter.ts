import { Router } from 'express';
import SaleProductFactory from '../factories/SaleProductFactory';

const router = Router();

router.post(
  '/saleProduct', (req, res) => SaleProductFactory().create(req, res));
router.get('/saleDetails/:id', 
  (req, res) => SaleProductFactory().getBySaleId(req, res));

export default router;