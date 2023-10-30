import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { BookForm } from './BookForm';
import '@app/src/App.css';
import './BookListShowEdit.css';

export function BookCreate() {
  const buttonName = 'CREATE BOOK';

  return (
    <div id='book-create' className='flex-display'>
      <Card component='main' className='book-card'>
        <CardHeader title='Add a book by entering Title' />
        <BookForm buttonName={buttonName} />
      </Card>
    </div>
  );
}
