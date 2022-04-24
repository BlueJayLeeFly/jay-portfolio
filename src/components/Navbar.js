import React from 'react';
import './Navbar.css';
import { ReactComponent as Logo } from '../images/Jay_logo.svg';

function Navbar() {
  return (
    <div>
      <nav>
        <div id="logo">
          <Logo width="80" height="80" />
        </div>

        <ul id="menu">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SHOWCASES</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>

        <ul id="member-area">
          <li>SIGN IN</li>
          <li>SIGN UP</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
