import User from '../database/models/User';

export type RegisterData = {
  name: string;
  email: string;
  password: string;
  role?: string;
  active?: boolean;
}

export interface IUserModel {
  getByEmail(email: string): Promise <User | null>;
  getIdByName(name: string): Promise<number | null>;
  getSellers(): Promise <User[]>;
  create(data: RegisterData): Promise <User | null>;
  createByAdmin(data: RegisterData): Promise <void>;
  remove(id: number): Promise<void>;
  update(id: number): Promise<void>;
  getAll(): Promise<User[]>;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface IUserService {
  tryLogin(data: IUserLoginRequest): Promise<object>;
  getSellers(): Promise <User[]>;
  getIdByName(name: string):Promise <number | null>;
  create(data: RegisterData): Promise <User | null>;
  createByAdmin(data: RegisterData): Promise <void>;
  remove(id: number): Promise<void>;
  emailConfirmation(token: string): Promise<User | boolean>;
  getAll(): Promise<User[]>;
}