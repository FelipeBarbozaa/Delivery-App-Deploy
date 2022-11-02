export default async function getSalesByUserId(token, id) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch(`http://localhost:3001/sales/${id}`, requestOptions);
  const result = await response.json();

  return result;
}
