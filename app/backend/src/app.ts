import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import userRouter from './routes/UserRouter';
import errorHandler from './middlewares/error';
import Token from './token/generateJWT';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', userRouter);
app.post('/validate', async (req, res) => {
  const { authorization } = req.headers;
  const response = Token.validateToken(authorization as string);
  return res.status(200).json({ message: response });
});

app.use(errorHandler);

export default app;
