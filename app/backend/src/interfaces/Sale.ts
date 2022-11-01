export type SaleData = {
  userId: number;
  sellerId: number;
  status: string;
  totalPrice: number;
  deliveryAddress: string;
  deliveryNumber: string;
  saleDate: Date;
  seller: {
    name: string;
  }
}

export interface ISaleModel {
  create(obj: SaleData): Promise<number>;
  getById(id: number): Promise<SaleData | null>;
}

export interface ISaleService {
  create(obj: SaleData): Promise<number>;
  getById(id: number): Promise<SaleData | null>;
}