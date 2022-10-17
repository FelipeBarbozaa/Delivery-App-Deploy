import { Request, Response } from 'express';
import { IProductService } from '../interfaces/Product';

export default class ProductController {
  constructor (private productService: IProductService) {}

  async getProducts(_req: Request, res: Response) {
    const result = await this.productService.getProducts();
    return res.status(200).json(result);
  }
}