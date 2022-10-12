export default async function tryLogin(userData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  const response = await fetch('http://localhost:3001/login', requestOptions);
  return response.json();
}
