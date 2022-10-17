import Product from '../database/models/Product';
import { IProductModel, IProductService } from '../interfaces/Product';

export default class ProductService implements IProductService {
  constructor (private model: IProductModel) {}
  
  async getProducts(): Promise<Product[]> {
    const result = await this.model.getProducts();
    return result;
  }
}