export default async function removeOne(token, id) {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  await fetch(`http://localhost:3001/admin/delete/${id}`, requestOptions);
}
