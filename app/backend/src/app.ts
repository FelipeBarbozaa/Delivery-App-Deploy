import express from 'express';
import Sale from './database/models/Sale';
import User from './database/models/User';
import Product from './database/models/Product'
import Sale_products from './database/models/Sale_products'

const app = express();

app.use(express.json());
app.get('/users', async (req, res) => {
  const users = await User.findAll({ raw: true });
  return res.status(200).json({ message: users });
})

app.get('/sales', async (req, res) => {
  const sales = await Sale.findAll({ raw: true });
  return res.status(200).json({ message: sales });
})

app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  return res.status(200).json({ message: products })
})

app.get('/sales_products', async (req, res) => {
  const sales_products = await Sale_products.findAll();
  return res.status(200).json({ message: sales_products })
})

export default app;