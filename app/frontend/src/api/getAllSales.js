export default async function getSalesByUserId(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch('http://localhost:3001/sales/', requestOptions);
  const result = await response.json();

  return result;
}
