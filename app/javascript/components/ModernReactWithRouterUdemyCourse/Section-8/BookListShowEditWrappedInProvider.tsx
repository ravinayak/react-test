import React from 'react';
import { Provider } from './context/Provider';
import { BookListShowEdit } from './BookListShowEdit';

export function BookListShowEditWrappedInProvider() {
  return (
    <Provider>
      <BookListShowEdit />
    </Provider>
  );
}
