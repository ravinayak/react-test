import React, { useState, useMemo, createContext, ReactNode, useCallback } from 'react';
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

  const handleFetchAllBooks = useCallback(async () => {
    const booksData: IJsonServerBook[] | AxiosError = await fetchBooks();
    if (!axios.isAxiosError(booksData)) {
      setBooks(booksData);
    }
  }, []);

  const handleCreate = useCallback(
    async ({ title, pages, tag }: IJSonServerBookPayload): Promise<void> => {
      const book = await createBook({ title, pages, tag });
      if (!axios.isAxiosError(book)) {
        const updatedBooks = [...books, book];
        setBooks(updatedBooks);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const updateBookById = useCallback(
    (book: IJsonServerBook, id: number): IJsonServerBook[] =>
      books.map((bookInArray) => {
        if (bookInArray.id == id) {
          return book;
        }
        return bookInArray;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleEdit = useCallback(
    async ({ id, title, pages, tag }: IJsonServerBookEditPayload): Promise<void> => {
      const book = await editBook({ id, title, pages, tag });
      if (!axios.isAxiosError(book)) {
        const updatedBooks = updateBookById(book, id);
        setBooks(updatedBooks);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleDelete = useCallback(async ({ id }: IJsonServerBookDeletePayload) => {
    await deleteBook({ id });
    const updatedBooks = books.filter((bookInArray) => bookInArray.id != id);
    setBooks(updatedBooks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // booksOperations object uses functions which are based on useCallback

  const booksOperations = {
    books,
    handleFetchAllBooks,
    handleCreate,
    handleEdit,
    handleDelete,
  };

  // Here we are using stable as a prefix for the function name simply to distinguish it
  // from functions which are called without using useCallback
  // Normally we simply wrap the entire function definition in useCallback such that the
  // function name itself refers to useCallback version
  //
  // const stableHandleFetchAllBooks = useCallback(handleFetchAllBooks, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const stableHandleCreate = useCallback(handleCreate, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const stableHandleEdit = useCallback(handleEdit, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const stableHandleDelete = useCallback(handleDelete, []);

  // booksOperations object with functions which are based on useCallback
  //
  // const booksOperations = {
  //   books,
  //   stableHandleFetchAllBooks,
  //   stableHandleCreate,
  //   stableHandleEdit,
  //   stableHandleDelete,
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedBooksOperations = useMemo(() => booksOperations, [booksOperations.books]);

  return <BooksContext.Provider value={memoizedBooksOperations}>{children}</BooksContext.Provider>;
}
