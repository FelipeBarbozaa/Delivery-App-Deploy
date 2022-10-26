import { Request, Response } from 'express';
import { ISaleService } from '../interfaces/Sale';

export default class SaleController {
  constructor(private saleService: ISaleService) {}

  async create(req: Request, res: Response) {
    const result = await this.saleService.create(req.body);
    res.status(201).json({ id: result});
  }
}