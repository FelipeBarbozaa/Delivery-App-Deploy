export default async function emailConfirmation(token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`https://delivery-app-deploy-production.up.railway.app/${token}`, requestOptions);
  return response.json();
}
