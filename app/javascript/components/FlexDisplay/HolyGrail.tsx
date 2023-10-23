import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import Button from '@mui/material/Button';
import './HolyGrail.css';

export function HolyGrail() {
  const navigate = useNavigate();
  return (
    <>
      <div id='holy-grail'>
        <div className='header-container'>
          <header className='flex-header justify-align-center'>HEADER</header>
          <main className='flex-main'>
            <nav className='flex-nav justify-align-center'>SIDENAV</nav>
            <article className='flex-article justify-align-center'>MAIN CONTENT</article>
            <aside className='flex-aside justify-align-center'>SIDENAV</aside>
          </main>
          <footer className='flex-footer justify-align-center'>FOOTER</footer>
        </div>
      </div>
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
    </>
  );
}
