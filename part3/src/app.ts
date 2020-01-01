import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './db';
import * as bookController from './controllers/bookController';

const app: Application = express();

const port = 5000;
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', bookController.allBooks);
app.post('/books', bookController.addBook);
app.get('/books/:id', bookController.getBookById);
app.delete('/books/:id', bookController.deleteBook);
app.put('/books/:id', bookController.updateBook);

app.listen(port, () => console.log(`server is on ${port}`));
