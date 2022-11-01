export default async function getSaleById(token, id) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch(`http://localhost:3001/saleById/${id}`, requestOptions);
  const result = await response.json();

  return result;
}
