import React from 'react';
import { IBook } from '@app/types/bookCreate';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '@app/src/App.css';
import './BookListShowEdit.css';

interface IProps {
  book: IBook;
  setBookEdit: (arg: boolean) => void;
  handleDelete: (id: number) => void;
}

export function BookShow({ book, setBookEdit, handleDelete }: IProps) {
  const handleEdit = () => {
    setBookEdit(true);
  };

  return (
    <div id='book-show' className='flex-display'>
      <Card className='book-show-card'>
        <div id='book-details' className='flex-display column-flex-direction book-details'>
          <span> Book id :: {book.id}</span>
          <span> Book title :: {book.title}</span>
        </div>
        <div style={{ marginLeft: '15px' }}>
          <EditIcon onClick={handleEdit} />
          <DeleteForeverIcon style={{ marginLeft: '5px' }} onClick={() => handleDelete(book.id)} />
        </div>
      </Card>
    </div>
  );
}
