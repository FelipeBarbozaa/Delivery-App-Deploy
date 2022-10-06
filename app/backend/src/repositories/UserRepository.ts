import { IUserModel } from '../interfaces/User';
import User from '../database/models/User';

export default class UserRepository implements IUserModel {
  constructor(private userModel = User) {}

  async getByEmail(email: string): Promise<User | null> {
    const result = await this.userModel.findOne({ where: { email }});
    return result;
  }
}