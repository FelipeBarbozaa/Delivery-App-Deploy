import SaleProductRepository from '../repositories/SaleProductRepository';
import SaleProductService from '../services/SaleProductService';
import SaleProductController from '../controllers/SaleProductController';

export default () => {
  const model = new SaleProductRepository();
  const service = new SaleProductService(model);
  const controller = new SaleProductController(service);

  return controller;
};
