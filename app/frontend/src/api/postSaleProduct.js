export default async function postSaleApi(token, saleData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(saleData),
  };

  await fetch('https://delivery-app-deploy-production.up.railway.app/saleProduct', requestOptions);
}
