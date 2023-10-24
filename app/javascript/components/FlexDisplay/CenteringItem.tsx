import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import Button from '@mui/material/Button';
import './CenteringItem.css';
import '@app/src/App.css';

export function CenteringItem() {
  const navigate = useNavigate();
  return (
    <div className='flex-column-justify-align-center'>
      <div id='centering-item'>
        <div className='flex-column-justify-align-center margin-bottom-16'>
          <div className='heading-introduction'>Centering Item Component</div>
          <div>*************************************************************</div>
        </div>
      </div>
      <div className='items-container'>
        <div className='item'>
          <h1>Item</h1>
        </div>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center' }}
        className='margin-course-section-button'
      >
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
          sx={{ mt: 4 }}
          onClick={() => navigate(routes.FLEXBOX_DISPLAY, { state: { displayWelcomePage: true } })}
        >
          Back to Course Sections Listing Page
        </Button>
      </div>
    </div>
  );
}
