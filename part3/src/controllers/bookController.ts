import { Request, Response } from 'express';
import Book from '../models/Book';

export const allBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    if (!books) return res.status(401).send('No Books');
    res.json(books);
  } catch (err) {
    res.status(500).send('Server error');
    console.error(err.message);
  }
};
