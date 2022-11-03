import md5 from 'md5';
import { IUserModel, RegisterData } from '../interfaces/User';
import User from '../database/models/User';

export default class UserRepository implements IUserModel {
  constructor(private userModel = User) {}

  async getByEmail(email: string): Promise<User | null> {
    const result = await this.userModel.findOne({ where: { email }});
    return result;
  }

  async getByName(name: string): Promise<User | null> {
    const result = await this.userModel.findOne({ where: { name }});
    return result;
  }

  async create(data: RegisterData): Promise<User | null> {
    const newData = {
      name: data.name,
      email: data.email,
      password: md5(data.password)
    };
    const result = await this.userModel.create(newData);
    return result;
  }

  async update(id: number): Promise<void> {
    await this.userModel.update({ active: 1}, { where: { id }});
  }

  async getAll(): Promise<User[]> {
    const result = await this.userModel.findAll();
    return result;
  }

  async createByAdmin(data: RegisterData): Promise<void> {

    const newData = {
      name: data.name,
      email: data.email,
      password: md5(data.password),
      role: data.role,
      active: data.active,
    };
    await this.userModel.create(newData);
  }

  async remove(id: number): Promise<void> {
    await this.userModel.destroy({ where: { id }});
  }
}
