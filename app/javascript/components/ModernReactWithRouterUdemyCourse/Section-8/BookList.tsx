import React from 'react';
import { useBooksContext } from '@app/hooks/useBooksContext';
import '@app/src/App.css';
import './BookListShowEdit.css';
import { keyGenerator } from '@app/shared/helpers';
import { BookDisplay } from './BookDisplay';

export function BookList() {
  const { books } = useBooksContext();
  let num = 0;

  const renderedBooks = books.map((book) => {
    num += 1;
    const key = keyGenerator(num);
    return <BookDisplay key={key} book={book} />;
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
