import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import Button from '@mui/material/Button';
import '../../src/App.css';

export function FlexContainerDisplay() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex-column-justify-align-center margin-bottom-16'>
        <div className='heading-introduction'>Flex-Container - Flex Items - Display</div>
        <div>
          **********************************************************************************
        </div>
      </div>
      <div className='flex-display column-flex-direction margin-course-section-button'>
        <div id='flex-test-container' className='flex-container'>
          <div id='flex-item1' className='flex-item item-1'>
            Item 1
          </div>
          <div id='flex-item2' className='flex-item item-2'>
            Item 2
          </div>
          <div id='flex-item3' className='flex-item item-3'>
            Item 3
          </div>
          <div id='flex-item4' className='flex-item item-4'>
            Item 4
          </div>
          <div id='flex-item5' className='flex-item item-5'>
            Item 5
          </div>
          <div id='flex-item6' className='flex-item item-6'>
            Item 6
          </div>
          <div id='flex-item7' className='flex-item item-7'>
            Item 7
          </div>
          <div id='flex-item7' className='flex-item item-8'>
            Item 8
          </div>
          <div id='flex-item7' className='flex-item item-9'>
            Item 9
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant='outlined'
            type='submit'
            id='btn-back-button'
            sx={{ mt: 4, mb: 8 }}
            onClick={() =>
              navigate(routes.FLEXBOX_DISPLAY, { state: { displayWelcomePage: true } })
            }
          >
            Back to Course Sections Listing Page
          </Button>
        </div>
      </div>
    </div>
  );
}
