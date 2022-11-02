export default async function updateOrderStatus(token, id) {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
      'Access-Control-Allow-Headers': '*',
      authorization: token,
    },
  };

  const response = await fetch(`http://localhost:3001/sales/${id}`, requestOptions);
  return response.json();
}
