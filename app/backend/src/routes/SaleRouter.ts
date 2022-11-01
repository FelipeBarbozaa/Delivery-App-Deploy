import { Router } from 'express';
import SaleFactory from '../factories/SaleFactory';

const router = Router();

router.post('/sale', (req, res) => SaleFactory().create(req, res));
router.get('/saleById/:id', (req, res) => SaleFactory().getById(req, res));

export default router;