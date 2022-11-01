import { Request, Response } from 'express';
import { ISaleService } from '../interfaces/Sale';

export default class SaleController {
  constructor(private saleService: ISaleService) {}

  async create(req: Request, res: Response) {
    const result = await this.saleService.create(req.body);
    return res.status(201).json({ id: result});
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this.saleService.getById(parseInt(id, 10));
    return res.status(200).json(result);
  }
}