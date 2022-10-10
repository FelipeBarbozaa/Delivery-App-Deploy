import { Router } from 'express';
import UserFactory from '../factories/UserFactory';
import loginCredencials from '../middlewares/loginCredencials';
import registerCredencials from '../middlewares/registerCredencials';

const router = Router();

router.post('/login', loginCredencials,
  (req, res) => UserFactory().login(req, res));
router.post('/register', registerCredencials,
  (req, res) => UserFactory().create(req, res));

export default router;