import React from 'react';
import { IJsonServerBook, IJsonServerBookEditPayload } from '@app/types/jsonServerBook';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import '@app/src/App.css';
import './BookListShowEdit.css';
import { BookForm } from './BookForm';

interface IProps {
  book: IJsonServerBook;
  setBookEdit: (arg: boolean) => void;
  handleEdit: ({ id, title, pages, tag }: IJsonServerBookEditPayload) => Promise<void>;
}

export function BookEdit({ book, setBookEdit, handleEdit }: IProps) {
  const buttonName = 'Update Book';

  return (
    <div id='book-edit' className='flex-display'>
      <Card className='book-card'>
        <CardHeader title='Edit Book - Enter new book title' />
        <BookForm
          handleEdit={handleEdit}
          buttonName={buttonName}
          setBookEdit={setBookEdit}
          book={book}
        />
      </Card>
    </div>
  );
}
