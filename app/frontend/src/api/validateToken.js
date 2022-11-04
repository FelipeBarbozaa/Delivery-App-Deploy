export default async function validateToken(token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const response = await fetch('https://delivery-app-deploy-production.up.railway.app/validate', requestOptions);
  return response.json();
}
