import { Request, Response } from 'express';
import { ISaleProductService } from '../interfaces/SaleProduct';

export default class SaleProductController {
  constructor(private saleProductService: ISaleProductService) {}

  async create(req: Request, res: Response) {
    await this.saleProductService.create(req.body);
    res.status(201).end();
  }

  async getBySaleId(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this.saleProductService.getBySaleId(parseInt(id, 10));
    return res.status(200).json(result);
  }
}