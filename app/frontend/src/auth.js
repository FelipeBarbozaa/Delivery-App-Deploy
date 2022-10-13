import validateToken from './api/validateToken';
import { TWO_HUNDRED_AND_ONE } from './utils/numbers';

const isAuthentication = async () => {
  const token = localStorage.getItem('token');
  const response = await validateToken(token);
  return response.status === TWO_HUNDRED_AND_ONE;
};

export default isAuthentication;
