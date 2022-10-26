import SaleRepository from '../repositories/SaleRepository';
import SaleService from '../services/SaleService';
import SaleController from '../controllers/SaleController';

export default () => {
  const model = new SaleRepository();
  const service = new SaleService(model);
  const controller = new SaleController(service);

  return controller;
};
