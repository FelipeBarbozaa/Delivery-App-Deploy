import { Router } from 'express';
import SaleFactory from '../factories/SaleFactory';

const router = Router();

router.post('/sale', (req, res) => SaleFactory().create(req, res));
router.get('/saleById/:id', (req, res) => SaleFactory().getById(req, res));
router.get('/sales/:id', (req, res) => SaleFactory().getSaleByUserId(req, res));
router.get('/sales', (req, res) => SaleFactory().getAll(req, res));
router.patch('/sales/:id', (req, res) => SaleFactory().update(req, res));

export default router;