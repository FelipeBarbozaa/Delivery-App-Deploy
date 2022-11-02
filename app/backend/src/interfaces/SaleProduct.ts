export type SaleProductType = {
  saleId: number;
  productId: number;
  quantity: number;
  product?: {
    name: string;
    price: number;
  }
}

export interface ISaleProductModel {
  create(array: SaleProductType[]): Promise<void>;
  getBySaleId(id: number): Promise<SaleProductType[] | null>;
}

export interface ISaleProductService {
  create(array: SaleProductType[]): Promise<void>;
  getBySaleId(id: number): Promise<SaleProductType[] | null>;
}