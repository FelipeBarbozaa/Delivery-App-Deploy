export default async function removeOne(token, id) {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  await fetch(`https://delivery-app-deploy-production.up.railway.app/admin/delete/${id}`, requestOptions);
}
