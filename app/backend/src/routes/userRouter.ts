import { Router } from 'express';
import UserFactory from '../factories/UserFactory';
import loginCredencials from '../middlewares/loginCredencials';

const router = Router();

router.post(
  '/login', loginCredencials, (req, res) => UserFactory().login(req, res));

export default router;