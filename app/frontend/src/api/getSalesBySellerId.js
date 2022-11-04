export default async function getSalesBySellerId(token, id) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch(`https://delivery-app-deploy-production.up.railway.app/salesBySellerId/${id}`, requestOptions);
  const result = await response.json();

  return result;
}
