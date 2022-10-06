import UserController from '../controllers/UserController';
import UserRepository from '../repositories/UserRepository';
import UserService from '../services/UserService';

export default () => {
  const model = new UserRepository();
  const service = new UserService(model);
  const controller = new UserController(service);

  return controller;
};