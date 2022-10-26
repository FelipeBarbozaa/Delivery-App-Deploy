export type SaleProductType = {
  saleId: number;
  productId: number;
  quantity: number;
}

export interface ISaleProductModel {
  create(array: SaleProductType[]): Promise<void>;
}

export interface ISaleProductService {
  create(array: SaleProductType[]): Promise<void>;
}