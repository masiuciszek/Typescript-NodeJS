import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { router } from './routes';
import { connectDb } from './config/db';

dotenv.config();

const app: Application = express();

connectDb();

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is on ${port}`));
