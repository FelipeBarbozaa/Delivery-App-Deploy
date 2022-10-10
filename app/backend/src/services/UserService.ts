import md5 from 'md5';
import User from '../database/models/User';
import { ErrorTypes } from '../error/catalog';
import {
  IUserModel,
  IUserService,
  IUserLoginRequest,
  RegisterData
} from '../interfaces/User';
import Token from '../token/generateJWT';
  
export default class UserService implements IUserService {
  constructor(private model: IUserModel) {}

  async tryLogin(data: IUserLoginRequest): Promise<string> {
    const { email, password } = data;

    const loginError = new Error(ErrorTypes.InvalidLogin);
    const inactiveError = new Error(ErrorTypes.Inactive);

    const result = await this.model.getByEmail(email);
    if (!result || md5(password) !== result.password) throw loginError;

    const { id, name, role, active } = result;
    if (!active) throw inactiveError;

    const token = Token.createToken({id, name, email, role });
    return token;
  }

  async create(data: RegisterData): Promise<User | null> {
    const { email } = data;
    const emailExistsError = new Error(ErrorTypes.EmailExists);

    const checkIfExists = await this.model.getByEmail(email);
    if (checkIfExists) throw emailExistsError;

    const result = await this.model.create(data);
    return result;
  }
}
