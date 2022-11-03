export default async function getSalesBySellerId(token, id) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch(`http://localhost:3001/salesBySellerId/${id}`, requestOptions);
  const result = await response.json();

  return result;
}
