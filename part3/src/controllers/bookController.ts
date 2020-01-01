import { Request, Response } from 'express';
import Book, { BookType, FieldsType } from '../models/Book';

export const allBooks = async (req: Request, res: Response): BookType[] => {
  try {
    const books = await Book.find();
    if (!books) return res.status(401).send('No Books');
    res.json(books);
  } catch (err) {
    res.status(500).send('Server error');
    console.error(err.message);
  }
};

export const addBook = async (req: Request, res: Response) => {
  const book = new Book({
    ...req.body,
  });
  try {
    await book.save();
    res.send(book);
  } catch (err) {
    res.status(500).send('Server error');
    console.error(err.message);
  }
};

export const getBookById = async (req: Request, res: Response): BookType => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(401).send('no book by this id');
    }
    res.json(book);
  } catch (err) {
    res.status(500).send('Server error');
    console.error(err.message);
  }
};

/**
 *
 * @Method delete
 * @desc "Delete on book"
 *
 */
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(401).json({ msg: 'Noo book' });
    await book.remove();
    res.json({ msg: 'book got deleted' });
  } catch (err) {
    res.status(500).send('Server error');
    console.error(err.message);
  }
};

export const updateBook = async (req: Request, res: Response): BookType => {
  const { title, author } = req.body;
  const { id } = req.params;
  const fields: FieldsType = {};
  if (title) fields.title = title;
  if (author) fields.author = author;
  try {
    let book = await Book.findById(id);
    if (!book) return res.status(404).json({ msg: 'Contact not found' });

    book = await Book.findByIdAndUpdate(id, { $set: fields }, { new: true });
    res.json(book);
  } catch (err) {
    res.status(500).send('Server error');
    console.error(err.message);
  }
};
