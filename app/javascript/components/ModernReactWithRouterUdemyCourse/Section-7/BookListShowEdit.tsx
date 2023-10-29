import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import Button from '@mui/material/Button';
import axios, { AxiosError } from 'axios';
import {
  IJsonServerBook,
  IJsonServerBookDeletePayload,
  IJsonServerBookEditPayload,
  IJSonServerBookPayload,
} from '@app/types/jsonServerBook';
import {
  fetchBooks,
  createBook,
  editBook,
  deleteBook,
} from '@app/queries/jsonServerBookCreateEditDelete';
import { BookCreate } from './BookCreate';
import { BookList } from './BookList';
import './BookListShowEdit.css';

export function BookListShowEdit() {
  const [books, setBooks] = useState<IJsonServerBook[]>([]);
  const navigate = useNavigate();

  const getAllBooks = async () => {
    const booksData: IJsonServerBook[] | AxiosError = await fetchBooks();
    if (!axios.isAxiosError(booksData)) {
      setBooks(booksData);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleCreate = async ({ title, pages, tag }: IJSonServerBookPayload): Promise<void> => {
    const book = await createBook({ title, pages, tag });
    if (!axios.isAxiosError(book)) {
      const updatedBooks = [...books, book];
      setBooks(updatedBooks);
    }
  };

  const updateBookById = (book: IJsonServerBook, id: number): IJsonServerBook[] =>
    books.map((bookInArray) => {
      if (bookInArray.id == id) {
        return book;
      }
      return bookInArray;
    });

  const handleEdit = async ({
    id,
    title,
    pages,
    tag,
  }: IJsonServerBookEditPayload): Promise<void> => {
    const book = await editBook({ id, title, pages, tag });
    if (!axios.isAxiosError(book)) {
      const updatedBooks = updateBookById(book, id);
      setBooks(updatedBooks);
    }
  };

  const handleDelete = async ({ id }: IJsonServerBookDeletePayload) => {
    await deleteBook({ id });
    const updatedBooks = books.filter((bookInArray) => bookInArray.id != id);
    setBooks(updatedBooks);
  };

  return (
    <div id='book-list-show-edit' className='book-list-show-edit-container flex-display'>
      <div className='flex-column-justify-align-center flex-display margin-bottom-16'>
        <div className='heading-introduction'>Display Book List - Add/Edit/Delete Books</div>
        <div>
          ******************************************************************************************************
        </div>
      </div>
      <BookCreate handleCreate={handleCreate} />
      <BookList books={books} handleEdit={handleEdit} handleDelete={handleDelete} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
          sx={{ mt: 4, mb: 8 }}
          onClick={() =>
            navigate(routes.MODERN_REACT_WITH_ROUTER, { state: { displayWelcomePage: true } })
          }
        >
          Back to Course Sections Listing Page
        </Button>
      </div>
    </div>
  );
}
