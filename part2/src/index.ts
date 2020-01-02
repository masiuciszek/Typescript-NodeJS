import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router } from './routes';
import { connectDb } from './config/db';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8080;

connectDb();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => console.log(`Server is on ${port}`));
