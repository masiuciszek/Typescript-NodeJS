import express, { Request, Response, Application } from 'express';
import { connectDB } from './db';

const app: Application = express();

const port = 5000;
connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('HELLO');
});

app.listen(port, () => console.log(`server is on ${port}`));
