import React, { useState } from 'react';
import { IJsonServerBook } from '@app/types/jsonServerBook';
import { BookShow } from './BookShow';
import { BookEdit } from './BookEdit';

interface IProps {
  book: IJsonServerBook;
}
export function BookDisplay({ book }: IProps) {
  const [bookEdit, setBookEdit] = useState<boolean>(false);

  return bookEdit ? (
    <BookEdit book={book} setBookEdit={setBookEdit} />
  ) : (
    <BookShow book={book} setBookEdit={setBookEdit} />
  );
}
