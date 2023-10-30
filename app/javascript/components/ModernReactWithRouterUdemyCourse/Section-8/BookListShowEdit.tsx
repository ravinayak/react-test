import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import Button from '@mui/material/Button';
import { useBooksContext } from '@app/hooks/useBooksContext';
import { BookCreate } from './BookCreate';
import { BookList } from './BookList';
import './BookListShowEdit.css';

export function BookListShowEdit() {
  const navigate = useNavigate();
  const { handleFetchAllBooks } = useBooksContext();
  useEffect(() => {
    handleFetchAllBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id='book-list-show-edit' className='book-list-show-edit-container flex-display'>
      <div className='flex-column-justify-align-center flex-display margin-bottom-16'>
        <div className='heading-introduction'>Display Book List - Add/Edit/Delete Books</div>
        <div>
          ******************************************************************************************************
        </div>
      </div>
      <BookCreate />
      <BookList />
      <div style={{ display: 'flex', justifyContent: 'center', width: '90vw' }}>
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
          sx={{ mt: 4, mb: 8 }}
          onClick={() =>
            navigate(routes.MODERN_REACT_WITH_ROUTER, { state: { displayWelcomePage: true } })
          }
        >
          Back to Course Sections Listing Page
        </Button>
      </div>
    </div>
  );
}
