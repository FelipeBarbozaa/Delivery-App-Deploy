import Product from '../database/models/Product';
import SaleProduct from '../database/models/Sale_products';
import { ISaleProductModel, SaleProductType } from '../interfaces/SaleProduct';

export default class SaleProductRepository implements ISaleProductModel {
  constructor(private saleProductModel = SaleProduct) {}

  async create(array: SaleProductType[]): Promise<void> {
    array.map(async (data) => {
      await this.saleProductModel.create(data);
    });
  }

  async getBySaleId(id: number): Promise<SaleProductType[] | null> {
    const result = await this.saleProductModel.findAll(
      { where: { saleId: id }, include: [{
      model: Product,
      as: 'product',
      attributes: { exclude: ['id', 'urlImage']}
    }]});
    return result;
  }
}