import React from 'react';
import { IJsonServerBook, IJsonServerBookDeletePayload } from '@app/types/jsonServerBook';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '@app/src/App.css';
import './BookListShowEdit.css';

interface IProps {
  book: IJsonServerBook;
  setBookEdit: (arg: boolean) => void;
  handleDelete: ({ id }: IJsonServerBookDeletePayload) => Promise<void>;
}

export function BookShow({ book, setBookEdit, handleDelete }: IProps) {
  const onEdit = () => {
    setBookEdit(true);
  };

  return (
    <div id='book-show' className='flex-display'>
      <Card className='book-show-card'>
        <div id='book-details' className='flex-display column-flex-direction book-details'>
          <span> Book id :: {book.id}</span>
          <span> Book title :: {book.title}</span>
          <span> Book pages :: {book.pages}</span>
          <span> Book tag :: {book.tag}</span>
        </div>
        <div style={{ marginLeft: '15px' }}>
          <EditIcon onClick={onEdit} />
          <DeleteForeverIcon
            style={{ marginLeft: '5px' }}
            onClick={() => handleDelete({ id: book.id })}
          />
        </div>
      </Card>
    </div>
  );
}
