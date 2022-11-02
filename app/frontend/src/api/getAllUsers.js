export default async function getAllUsers(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch('http://localhost:3001/users', requestOptions);
  const result = await response.json();

  return result;
}
