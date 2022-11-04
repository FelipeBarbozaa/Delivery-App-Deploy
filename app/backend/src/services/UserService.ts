import md5 from 'md5';
import User from '../database/models/User';
import sendEmail from '../nodemailer';
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

  async tryLogin(data: IUserLoginRequest): Promise<object> {
    const { email, password } = data;

    const loginError = new Error(ErrorTypes.InvalidLogin);
    const inactiveError = new Error(ErrorTypes.Inactive);

    const result = await this.model.getByEmail(email);
    if (!result || md5(password) !== result.password) throw loginError;

    const { id, name, role, active } = result;
    if (!active) throw inactiveError;

    const token = Token.createToken(
      {id, name, email, role, type: 'authentication' }
    );
    return { token, name, role, email, id };
  }

  async create(data: RegisterData): Promise<User | null> {
    const { email, name } = data;
    const emailExistsError = new Error(ErrorTypes.EmailExists);
    const userExistsError = new Error(ErrorTypes.UserExists);

    const checkIfNameExists = await this.model.getIdByName(name);
    if (checkIfNameExists) throw userExistsError;

    const checkifEmailExists = await this.model.getByEmail(email);
    if (checkifEmailExists) throw emailExistsError;

    const result = await this.model.create(data);
    if (result) {
      const token = Token.createToken({
        id: result.id, type: 'activation', name: result.name,
        email: result.email,
        role: result.role,
      });
      sendEmail(email, token);
    }
    return result;
  }

  async emailConfirmation(token: string): Promise<User | boolean> {
    const response = Token.validateToken(token as string);
    if (response && response.type === 'activation') {
      await this.model.update(response.id as number);
      const newToken = Token.createToken({
        id: response.id, name: response.name, email: response.email,
        role: response.role, type: 'authentication'
      });
      const result = { response, newToken };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return result as unknown as any ;
    }
    return false;
  }

  async getAll(): Promise<User[]> {
    const result = await this.model.getAll();
    return result;
  }

  async createByAdmin(data: RegisterData): Promise<void> {
    const { email, name } = data;
    const emailExistsError = new Error(ErrorTypes.EmailExists);
    const userExistsError = new Error(ErrorTypes.UserExists);

    const checkIfNameExists = await this.model.getIdByName(name);
    if (checkIfNameExists) throw userExistsError;

    const checkIfEmailExists = await this.model.getByEmail(email);
    if (checkIfEmailExists) throw emailExistsError;


    await this.model.createByAdmin(data);
  }

  async remove(id: number): Promise<void> {
    await this.model.remove(id);
  }

  async getSellers(): Promise<User[]> {
    const result = await this.model.getSellers();
    return result;
  }

  async getIdByName(name: string): Promise<number | null> {
    const result = await this.model.getIdByName(name);
    return result;
  }
}
