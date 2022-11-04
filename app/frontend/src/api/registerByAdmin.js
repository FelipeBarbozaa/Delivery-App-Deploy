export default async function tryRegisterByAdminApi(token, userData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(userData),
  };

  const response = await fetch('https://delivery-app-deploy-production.up.railway.app/admin/register', requestOptions);
  const result = await response.json();

  return result;
}
