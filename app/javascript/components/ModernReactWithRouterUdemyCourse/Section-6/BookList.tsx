import React from 'react';
import { IBook } from '@app/types/bookCreate';
import '@app/src/App.css';
import './BookListShowEdit.css';
import { keyGenerator } from '@app/shared/helpers';
import { BookDisplay } from './BookDisplay';

interface IProps {
  books: IBook[];
  handleDelete: (id: number) => void;
  handleEdit: (title: string, id: number) => void;
}

export function BookList({ books, handleDelete, handleEdit }: IProps) {
  let num = 0;
  const renderedBooks = books.map((book) => {
    num += 1;
    const key = keyGenerator(num);
    return (
      <BookDisplay key={key} book={book} handleEdit={handleEdit} handleDelete={handleDelete} />
    );
  });
  return (
    <div>
      {renderedBooks.length > 0 && (
        <div id='book-list' className='book-list'>
          {renderedBooks}
        </div>
      )}
    </div>
  );
}
