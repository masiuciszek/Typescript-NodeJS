import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/loginRoutes';

const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => console.log(`Server is on ${port}`));
