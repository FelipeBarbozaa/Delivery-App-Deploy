import validateToken from './api/validateToken';

const isAuthentication = async () => {
  const token = localStorage.getItem('token');
  const result = await validateToken(token);
  return (result.message !== 'Invalid token');
};

export default isAuthentication;
