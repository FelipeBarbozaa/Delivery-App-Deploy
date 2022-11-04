export default async function getSellers(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch('https://delivery-app-deploy-production.up.railway.app/sellers', requestOptions);
  return response.json();
}
