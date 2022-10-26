export type SaleData = {
  userId: number;
  sellerId: number;
  status: string;
  totalPrice: string;
  deliveryAddress: string;
  deliveryNumber: string;
  saleDate: Date;
}

export interface ISaleModel {
  create(obj: SaleData): Promise<number>;
}

export interface ISaleService {
  create(obj: SaleData): Promise<number>;
}