import { ISaleModel, SaleData } from '../interfaces/Sale';
import Sale from '../database/models/Sale';
import User from '../database/models/User';

export default class SaleRepository implements ISaleModel {
  constructor(private saleModel = Sale) {}

  async create(obj: SaleData): Promise<number> {
    const { id } = await this.saleModel.create(obj);
    return id;
  }

  async getById(id: number): Promise<SaleData | null> {
    const result = await this.saleModel.findOne({ where: { id }, include: [{
      model: User,
      as: 'seller',
      attributes: { exclude: ['id', 'email', 'password', 'role', 'active']}
    }]});
    return result as unknown as SaleData;
  }
}