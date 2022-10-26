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
}