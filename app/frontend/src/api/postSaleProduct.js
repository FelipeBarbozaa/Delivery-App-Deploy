export default async function postSaleApi(token, saleData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(saleData),
  };

  await fetch('http://localhost:3001/saleProduct', requestOptions);
}
