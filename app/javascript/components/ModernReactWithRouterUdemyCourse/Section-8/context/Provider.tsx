import React, { useState, useMemo, createContext, ReactNode } from 'react';
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

export const BooksContext = createContext(null);

interface IComponentProps {
  children: ReactNode;
}
export function Provider({ children }: IComponentProps) {
  const [books, setBooks] = useState<IJsonServerBook[]>([]);

  const handleFetchAllBooks = async () => {
    const booksData: IJsonServerBook[] | AxiosError = await fetchBooks();
    if (!axios.isAxiosError(booksData)) {
      setBooks(booksData);
    }
  };

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

  const booksOperations = {
    books,
    handleFetchAllBooks,
    handleCreate,
    handleEdit,
    handleDelete,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedBooksOperations = useMemo(() => booksOperations, [booksOperations.books]);

  return <BooksContext.Provider value={memoizedBooksOperations}>{children}</BooksContext.Provider>;
}
