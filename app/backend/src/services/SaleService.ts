import { ISaleModel, ISaleService, SaleData } from '../interfaces/Sale';

export default class SaleService implements ISaleService {
  constructor(private model: ISaleModel) {}

  async create(obj: SaleData): Promise<number> {
    const result = await this.model.create(obj);
    return result;
  }

  async getById(id: number): Promise<SaleData> {
    const result = await this.model.getById(id);
    return result;
  }

  async getSalesByUserId(id: number): Promise<SaleData[] | null> {
    const result = await this.model.getSalesByUserId(id);
    return result;
  }

  async getAll(): Promise<SaleData[]> {
    const result = await this.model.getAll();
    return result;
  }

  async update(id: number): Promise<void> {
    const { status: orderStatus} = await this.getById(id);
    type ObjectType = {
      Pendente: string;
      Preparando: string;
      'Em Trânsito': string;
    }
  
    const changeValue: ObjectType = {
      Pendente: 'Preparando',
      Preparando: 'Em Trânsito',
      'Em Trânsito': 'Entregue',
    };

    const newStatus = changeValue[orderStatus as keyof typeof changeValue];
    await this.model.update(id, newStatus);
  }
}