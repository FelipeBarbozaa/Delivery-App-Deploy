import { ISaleModel, ISaleService, SaleData } from '../interfaces/Sale';

export default class SaleService implements ISaleService {
  constructor(private model: ISaleModel) {}

  async create(obj: SaleData): Promise<number> {
    const result = await this.model.create(obj);
    return result;
  }
}