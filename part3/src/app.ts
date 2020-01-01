import express, { Request, Response, Application } from 'express';

const app: Application = express();

const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('HELLO');
});

app.listen(port, () => console.log(`server is on ${port}`));
