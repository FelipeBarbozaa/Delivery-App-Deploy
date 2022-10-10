import express from 'express';
import 'express-async-errors';
import userRouter from './routes/UserRouter';
import errorHandler from './middlewares/error';
import UserRepository from './repositories/UserRepository';

const app = express();

app.use(express.json());
app.use('/', userRouter);
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const userRepository = new UserRepository();
  const result = await userRepository.create({ name, email, password });
  return res.status(200).json({ message: result });
});

app.use(errorHandler);

export default app;
