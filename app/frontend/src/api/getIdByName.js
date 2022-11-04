export default async function getIdByName(token, name) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
      name,
    },
  };

  const response = await fetch('https://delivery-app-deploy-production.up.railway.app/getIdByName', requestOptions);
  return response.json();
}
