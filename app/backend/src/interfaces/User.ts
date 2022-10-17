import User from '../database/models/User';

export type RegisterData = {
  name: string;
  email: string;
  password: string;
}

export interface IUserModel {
  getByEmail(email: string): Promise <User | null>;
  create(data: RegisterData): Promise <User | null>;
  update(id: number): Promise<void>;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface IUserService {
  tryLogin(data: IUserLoginRequest): Promise<object>;
  create(data: RegisterData): Promise <User | null>;
  emailConfirmation(token: string): Promise<boolean>;
}