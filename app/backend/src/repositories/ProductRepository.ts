import Product from '../database/models/Product';
import { IProductModel } from '../interfaces/Product';

export default class ProductRepository implements IProductModel {
  constructor(private productModel = Product) {}

  async getProducts(): Promise<Product[]> {
    const result = await this.productModel.findAll();
    return result;
  }
}