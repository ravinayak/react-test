import React from 'react';
import '@app/stylesheets/HolyGrail1.css';

export function HolyGrail() {
  return (
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
  );
}
