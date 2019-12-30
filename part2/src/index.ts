import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router } from './routes/login';
import { connectMongoDb } from './config/db';
import './controllers/LoginController';
import { router as controllerRouter } from './controllers/decoraters/controller';

const app: Application = express();
const port: number = 5000;

// connectMongoDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['legia'] }));
app.use(router);
app.use(controllerRouter);

app.listen(port, () => console.log(`Server is on ${port}`));
