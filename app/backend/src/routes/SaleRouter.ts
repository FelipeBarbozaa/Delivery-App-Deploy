import { Router } from 'express';
import SaleFactory from '../factories/SaleFactory';
import validateRouteToken from '../middlewares/validateRouteToken';

const router = Router();

router.post('/sale', validateRouteToken,
  (req, res) => SaleFactory().create(req, res));
router.get('/saleById/:id', validateRouteToken,
  (req, res) => SaleFactory().getById(req, res));
router.get('/sales/:id', validateRouteToken,
  (req, res) => SaleFactory().getSaleByUserId(req, res));
router.get('/sales', validateRouteToken, 
  (req, res) => SaleFactory().getAll(req, res));
router.patch('/sales/:id', validateRouteToken, 
  (req, res) => SaleFactory().update(req, res));

export default router;