export default async function tryRegisterByAdminApi(token, userData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(userData),
  };

  const response = await fetch('http://localhost:3001/admin/register', requestOptions);
  const result = await response.json();

  return result;
}
