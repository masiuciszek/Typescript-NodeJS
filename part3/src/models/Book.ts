import * as mongoose from 'mongoose';

export interface BookType {
  title: string;
  author: string;
}
export interface FieldsType {
  title: string | null;
  author: string | null;
}

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
});

const Book = mongoose.model('Book', BookSchema);

export default Book;
