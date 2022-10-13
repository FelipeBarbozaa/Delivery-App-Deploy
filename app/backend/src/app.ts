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
app.post('/validate', async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const response = Token.validateToken(authorization as string);
    if (response && response.type === 'authentication') {
      return res.status(201).end();
    }
    return res.status(500).end();
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

export default app;
