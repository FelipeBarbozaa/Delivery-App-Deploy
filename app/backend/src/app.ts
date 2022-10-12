import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import userRouter from './routes/UserRouter';
import errorHandler from './middlewares/error';

const app = express();

app.use(express.json());
app.use(cors())
app.use('/', userRouter);

app.use(errorHandler);

export default app;
