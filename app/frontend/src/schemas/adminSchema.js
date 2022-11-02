import Joi from 'joi';
import { SIX, TWELVE } from '../utils/numbers';

const userRegisterSchema = Joi.object({
  name: Joi.string().min(TWELVE).required().empty('')
    .messages({ 'string.min': 'name must be at least 12 characters long' }),
  email: Joi.string().email({ tlds: { allow: false } }).required().empty('')
    .messages({ 'string.email': 'the string is not a valid e-mail.' }),
  password: Joi.string().min(SIX).required().empty('')
    .messages({ 'string.min': 'password must be at least 6 characters long.' }),
  role: Joi.string().optional(),
});

export default userRegisterSchema;
