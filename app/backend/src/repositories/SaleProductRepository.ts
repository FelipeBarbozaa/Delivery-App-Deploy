import SaleProduct from '../database/models/Sale_products';
import { ISaleProductModel, SaleProductType } from '../interfaces/SaleProduct';

export default class SaleProductRepository implements ISaleProductModel {
  constructor(private saleProductModel = SaleProduct) {}

  async create(array: SaleProductType[]): Promise<void> {
    array.map(async (data) => {
      await this.saleProductModel.create(data);
    });
  }
}