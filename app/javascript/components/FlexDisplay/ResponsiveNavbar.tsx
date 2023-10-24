import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import Button from '@mui/material/Button';
import './ResponsiveNavbar.css';
import '@app/src/App.css';

export function ResponsiveNavbar() {
  const navigate = useNavigate();
  return (
    <div id='responsive-navbar'>
      <div className='flex-column-justify-align-center margin-bottom-16'>
        <div className='heading-introduction'>Responsive Navbar Component</div>
        <div>***************************************************************</div>
      </div>
      <nav>
        <ul>
          <li key='home'>Home</li>
          <li key='about'>About</li>
          <li key='services'>Services</li>
          <li key='contact'>Contact</li>
        </ul>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
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
