import { Request, Response, NextFunction } from 'express';
import userLoginSchema from '../schemas/UserSchema';

const loginCredencials = async (
  req: Request, res: Response, next: NextFunction
  ) => {
    const { email, password } = req.body;
    const { error } = userLoginSchema.validate({ email, password });
    if (error) {
      const [statusCode, message] = error.message.split('|');
      return res.status(Number(statusCode)).json({ error: message });
    }
    next();
};

export default loginCredencials;