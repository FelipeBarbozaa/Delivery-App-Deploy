export default async function getSellers(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch('http://localhost:3001/sellers', requestOptions);
  return response.json();
}
