import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { BookForm } from './BookForm';
import '@app/src/App.css';
import './BookListShowEdit.css';

interface IProps {
  handleCreate: (title: string) => void;
}
export function BookCreate({ handleCreate }: IProps) {
  const buttonName = 'CREATE BOOK';

  return (
    <div id='book-create' className='flex-display'>
      <Card component='main' className='book-card'>
        <CardHeader title='Add a book by entering Title' />
        <BookForm handleSubmit={handleCreate} buttonName={buttonName} />
      </Card>
    </div>
  );
}
