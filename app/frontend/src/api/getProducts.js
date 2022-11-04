export default async function getProducts(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch('https://delivery-app-deploy-production.up.railway.app/products', requestOptions);
  return response.json();
}
