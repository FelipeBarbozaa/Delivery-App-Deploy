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
    // Errors
    const loginError = new Error(ErrorTypes.InvalidLogin);
    const inactiveError = new Error(ErrorTypes.Inactive);
    // try fing an email
    const result = await this.model.getByEmail(email);
    // check if email and password is correct
    if (!result || md5(password) !== result.password) throw loginError;
    const { id, name, role, active } = result;
    // check if account is active
    if (!active) throw inactiveError;
    // create a token
    const token = Token.createToken({id, name, email, role });
    return token;
  }
}
