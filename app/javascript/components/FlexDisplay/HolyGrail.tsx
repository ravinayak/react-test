import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import Button from '@mui/material/Button';
import './HolyGrail.css';
import '@app/src/App.css';

export function HolyGrail() {
  const navigate = useNavigate();
  return (
    <>
      <div id='holy-grail'>
        <div className='container'>
          <header className='flex-header'>HEADER</header>
          <main className='flex-main'>
            <nav className='flex-nav'>SIDENAV</nav>
            <article className='flex-article'>MAIN CONTENT</article>
            <aside className='flex-aside'>SIDENAV</aside>
          </main>
          <footer className='flex-footer'>FOOTER</footer>
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
          sx={{ mt: 8 }}
          onClick={() => navigate(routes.FLEXBOX_DISPLAY, { state: { displayWelcomePage: true } })}
        >
          Back to Course Sections Listing Page
        </Button>
      </div>
    </>
  );
}
