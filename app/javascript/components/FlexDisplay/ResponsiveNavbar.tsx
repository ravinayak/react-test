import React from 'react';
import '@app/stylesheets/ResponsiveNavbar.css';

export function ResponsiveNavbar() {
  return (
    <div id='responsive-navbar'>
      <div>Responsive Navbar Component</div>
      <div>*************************************</div>
      <nav>
        <ul>
          <li key='home'>Home</li>
          <li key='about'>About</li>
          <li key='services'>Services</li>
          <li key='contact'>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
