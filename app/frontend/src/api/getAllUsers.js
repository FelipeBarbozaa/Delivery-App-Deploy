export default async function getAllUsers(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch('https://delivery-app-deploy-production.up.railway.app/users', requestOptions);
  const result = await response.json();

  return result;
}
