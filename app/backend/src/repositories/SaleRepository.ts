import { ISaleModel, SaleData } from '../interfaces/Sale';
import Sale from '../database/models/Sale';

export default class SaleRepository implements ISaleModel {
  constructor(private saleModel = Sale) {}

  async create(obj: SaleData): Promise<number> {
    const { id } = await this.saleModel.create(obj);
    return id;
  }
}