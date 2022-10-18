export default async function getProducts(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch('http://localhost:3001/products', requestOptions);
  return response.json();
}
