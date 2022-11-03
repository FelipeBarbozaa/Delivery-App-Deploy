export default async function getIdByName(token, name) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
      name,
    },
  };

  const response = await fetch('http://localhost:3001/getIdByName', requestOptions);
  return response.json();
}
