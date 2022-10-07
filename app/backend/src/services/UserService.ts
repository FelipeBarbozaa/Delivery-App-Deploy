import md5 from 'md5';
import { ErrorTypes } from '../error/catalog';
import {
  IUserModel,
  IUserService,
  IUserLoginRequest
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
}
