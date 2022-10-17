import Product from '../database/models/Product';

export interface IProductModel {
  getProducts(): Promise<Product[]>;
}

export interface IProductService {
  getProducts(): Promise<Product[]>;
}