import React from 'react';
import { IBook } from '@app/types/bookCreate';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import '@app/src/App.css';
import './BookListShowEdit.css';
import { BookForm } from './BookForm';

interface IProps {
  book: IBook;
  setBookEdit: (arg: boolean) => void;
  handleEdit: (title: string, id: number) => void;
}

export function BookEdit({ book, setBookEdit, handleEdit }: IProps) {
  const buttonName = 'Update Book';

  return (
    <div id='book-edit' className='flex-display'>
      <Card className='book-card'>
        <CardHeader title='Edit Book - Enter new book title' />
        <BookForm
          handleSubmit={handleEdit}
          buttonName={buttonName}
          setBookEdit={setBookEdit}
          book={book}
        />
      </Card>
    </div>
  );
}
