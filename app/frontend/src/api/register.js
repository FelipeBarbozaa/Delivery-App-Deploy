export default async function tryRegister(userData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  const response = await fetch('https://delivery-app-deploy-production.up.railway.app/register', requestOptions);
  return response.json();
}
