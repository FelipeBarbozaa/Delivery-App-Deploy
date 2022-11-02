import {
  ISaleProductModel,
  ISaleProductService,
  SaleProductType
} from '../interfaces/SaleProduct';

export default class SaleProductService implements ISaleProductService {
  constructor(private model: ISaleProductModel) {}

  async create(array: SaleProductType[]): Promise<void> {
    await this.model.create(array);
  }

  async getBySaleId(id: number): Promise<SaleProductType[] | null> {
    const result = await this.model.getBySaleId(id);
    return result;
  }
}