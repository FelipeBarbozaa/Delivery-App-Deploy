import Sale from './database/models/Sale';

(async () => {

  const users = await Sale.findAll({ raw: true });
  console.log(users);
  process.exit(0)
})()