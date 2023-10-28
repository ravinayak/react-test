import React, { useState } from 'react';
import { IBook } from '@app/types/bookCreate';
import { BookShow } from './BookShow';
import { BookEdit } from './BookEdit';

interface IProps {
  handleEdit: (title: string, id: number) => void;
  handleDelete: (id: number) => void;
  book: IBook;
}
export function BookDisplay({ book, handleEdit, handleDelete }: IProps) {
  const [bookEdit, setBookEdit] = useState<boolean>(false);
  return bookEdit ? (
    <BookEdit book={book} setBookEdit={setBookEdit} handleEdit={handleEdit} />
  ) : (
    <BookShow book={book} setBookEdit={setBookEdit} handleDelete={handleDelete} />
  );
}
