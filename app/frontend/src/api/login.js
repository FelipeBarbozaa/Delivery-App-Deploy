export default async function tryLogin(userData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  const response = await fetch('https://delivery-app-deploy-production.up.railway.app/login', requestOptions);
  return response.json();
}
