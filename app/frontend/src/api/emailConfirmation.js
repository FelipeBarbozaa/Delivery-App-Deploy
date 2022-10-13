export default async function emailConfirmation(token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`http://localhost:3001/confirmation/${token}`, requestOptions);
  return response;
}
