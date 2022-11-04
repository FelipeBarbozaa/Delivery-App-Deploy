import { Router } from 'express';
import UserFactory from '../factories/UserFactory';
import loginCredencials from '../middlewares/loginCredencials';
import registerCredencials from '../middlewares/registerCredencials';
import validateRouteToken from '../middlewares/validateRouteToken';

const router = Router();

router.post('/confirmation/:token',
  (req, res) => UserFactory().emailConfirmation(req, res));
router.post('/login', loginCredencials,
  (req, res) => UserFactory().login(req, res));
router.post('/register', registerCredencials,
  (req, res) => UserFactory().create(req, res));
router.get('/users', (req, res) => UserFactory().getAll(req, res));
router.get('/getIdByName', validateRouteToken,
  (req, res) => UserFactory().getIdByName(req, res));
router.get('/sellers', validateRouteToken,
  (req, res) => UserFactory().getSellers(req, res));
router.post('/admin/register', registerCredencials,
  (req, res) => UserFactory().createByAdmin(req, res));
router.delete('/admin/delete/:id',
  (req, res) => UserFactory().remove(req, res));

export default router;