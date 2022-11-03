import Joi from 'joi';
import { SIX, TWELVE } from '../utils/numbers';

const userRegisterSchema = Joi.object({
  name: Joi.string().min(TWELVE).empty()
    .messages({
      'string.empty': 'name is required',
      'string.min': 'name must be at least 12 characters long',
      'string.base': 'name must be a string',
    }),
  email: Joi.string().email({ tlds: { allow: false } }).empty()
    .messages({
      'string.empty': 'email is required',
      'string.base': 'email must be a string',
      'string.email': 'the string is not a valid e-mail.',
    }),
  password: Joi.string().min(SIX).empty()
    .messages({
      'string.min': 'password must be at least 6 characters long.',
      'string.empty': 'password is required',
      'string.base': 'password must be a string',
    }),
});

export default userRegisterSchema;
