import ProductRepository from '../repositories/ProductRepository';
import ProductService from '../services/ProductService';
import ProductController from '../controllers/ProductController';

export default () => {
  const model = new ProductRepository();
  const service = new ProductService(model);
  const controller = new ProductController(service);

  return controller;
};