export default async function tryRegister(userData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  const response = await fetch('http://localhost:3001/register', requestOptions);
  return response.json();
}
