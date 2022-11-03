export type SaleData = {
  userId: number;
  sellerId: number;
  status: string;
  totalPrice: number;
  deliveryAddress: string;
  deliveryNumber: string;
  saleDate: Date;
  seller?: {
    name: string;
  }
}

export interface ISaleModel {
  create(obj: SaleData): Promise<number>;
  getById(id: number): Promise<SaleData>;
  update(id: number, status: string): Promise<void>;
  getSalesBySellerId(id: number): Promise<SaleData[]>;
  getSalesByUserId(id: number): Promise<SaleData[] | null>;
}

export interface ISaleService {
  create(obj: SaleData): Promise<number>;
  getById(id: number): Promise<SaleData>;
  getSalesBySellerId(id: number): Promise<SaleData[]>;
  update(id: number, status: string): Promise<void>;
  getSalesByUserId(id: number): Promise<SaleData[] | null>;
}