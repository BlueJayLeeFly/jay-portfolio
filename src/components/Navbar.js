import './Navbar.css';
import { ReactComponent as Logo } from '../images/Jay_logo.svg';

function Navbar() {
  return (
    <>
      <nav>
        <div id="logo">
          <Logo width="80" height="80" />
        </div>

        <ul id="menu">
          <li>HOME</li>
          <li>WHOAMI</li>
          <li>SHOWCASES</li>
          <li>ROADMAP</li>
          <li>CONTACT</li>
        </ul>

        <ul id="member-area">
          <li>SIGN IN</li>
          <li>SIGN UP</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
