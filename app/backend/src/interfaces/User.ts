import User from '../database/models/User';

export interface IUserModel {
  getByEmail(email: string): Promise <User | null>
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface IUserService {
  tryLogin(data: IUserLoginRequest): Promise<string>;
}