import { Request, Response } from 'express';
import { ISaleProductService } from '../interfaces/SaleProduct';

export default class SaleProductController {
  constructor(private saleProductService: ISaleProductService) {}

  async create(req: Request, res: Response) {
    console.log(req.body);
    await this.saleProductService.create(req.body);
    res.status(201).end();
  }
}