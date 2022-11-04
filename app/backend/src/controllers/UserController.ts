import { Request, Response } from 'express';
import { IUserService } from '../interfaces/User';

export default class UserController {
  constructor(private userService: IUserService) {}

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = await this.userService.tryLogin({email, password});
    return res.status(200).json(result);
  }

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    await this.userService.create({ name, email, password });
    return res.status(201).json({ message: 'success' });
  }

  async emailConfirmation(req: Request, res: Response) {
    const { token } = req.params;
    const result = await this.userService.emailConfirmation(token);
    if (result) {
      return res.status(201).json(result);
    }
    return res.status(500).end();
  }

  async getAll(_req: Request, res: Response) {
    const result = await this.userService.getAll();
    return res.status(200).json(result);
  }

  async createByAdmin(req: Request, res: Response) {
    const { name, email , password, role, active } = req.body;
    await this.userService.createByAdmin(
      { name, email, password, role, active });
    return res.status(201).json({ message: 'user created successfully' });
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    await this.userService.remove(parseInt(id, 10));
    return res.status(204).end();
  }

  async getSellers(req: Request, res: Response) {
    const result = await this.userService.getSellers();
    return res.status(200).json(result);
  }

  async getIdByName(req: Request, res: Response) {
    const { name } = req.headers;
    const result = await this.userService.getIdByName(name as string);
    return res.status(200).json(result);
  }
}