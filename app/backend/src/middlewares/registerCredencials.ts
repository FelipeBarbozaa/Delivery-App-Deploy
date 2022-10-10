import { Request, Response, NextFunction } from 'express';
import { userRegisterSchema } from '../schemas/UserSchema';

const registerCredencials = async (
  req: Request, res: Response, next: NextFunction
  ) => {
    const { name, email, password } = req.body;
    const { error } = userRegisterSchema.validate({ name, email, password });
    if (error) {
      const [statusCode, message] = error.message.split('|');
      return res.status(Number(statusCode)).json({ error: message });
    }
    next();
};

export default registerCredencials;