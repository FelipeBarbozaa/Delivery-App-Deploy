import { ISaleModel, SaleData } from '../interfaces/Sale';
import Sale from '../database/models/Sale';
import User from '../database/models/User';

export default class SaleRepository implements ISaleModel {
  constructor(private saleModel = Sale) {}

  async create(obj: SaleData): Promise<number> {
    const { id } = await this.saleModel.create(obj);
    return id;
  }

  async getById(id: number): Promise<SaleData> {
    const result = await this.saleModel.findOne({ where: { id }, include: [{
      model: User,
      as: 'seller',
      attributes: { exclude: ['id', 'email', 'password', 'role', 'active']}
    }]});
    return result as unknown as SaleData;
  }

  async getSalesByUserId(id: number): Promise<SaleData[] | null> {
    const result = await this.saleModel.findAll({ where: { userId: id }});
    return result;
  }

  async getAll(): Promise<SaleData[]> {
    const result = await this.saleModel.findAll();
    return result;
  }

  async update(id: number, status: string): Promise<void> {
    await this.saleModel.update({ status }, { where: { id }});
  }
}