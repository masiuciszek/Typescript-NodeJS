import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';

const app: Application = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['legia'] }));
app.use(router);

app.listen(port, () => console.log(`Server is on ${port}`));
