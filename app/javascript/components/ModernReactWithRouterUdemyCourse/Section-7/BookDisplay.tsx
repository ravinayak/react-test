import React, { useState } from 'react';
import {
  IJsonServerBookEditPayload,
  IJsonServerBookDeletePayload,
  IJsonServerBook,
} from '@app/types/jsonServerBook';
import { BookShow } from './BookShow';
import { BookEdit } from './BookEdit';

interface IProps {
  handleEdit: ({ id, title, pages, tag }: IJsonServerBookEditPayload) => Promise<void>;
  handleDelete: ({ id }: IJsonServerBookDeletePayload) => Promise<void>;
  book: IJsonServerBook;
}
export function BookDisplay({ book, handleEdit, handleDelete }: IProps) {
  const [bookEdit, setBookEdit] = useState<boolean>(false);

  return bookEdit ? (
    <BookEdit book={book} setBookEdit={setBookEdit} handleEdit={handleEdit} />
  ) : (
    <BookShow book={book} setBookEdit={setBookEdit} handleDelete={handleDelete} />
  );
}
