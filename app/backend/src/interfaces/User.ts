import User from '../database/models/User';

export type RegisterData = {
  name: string;
  email: string;
  password: string;
}

export interface IUserModel {
  getByEmail(email: string): Promise <User | null>
  create(data: RegisterData): Promise <User | null>
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface IUserService {
  tryLogin(data: IUserLoginRequest): Promise<string>;
  create(data: RegisterData): Promise <User | null>
}