import './Navbar.css';
import '../images/Jay_logo.svg';

function Navbar() {
  return (
    <div>
      <nav>
        <div id="logo"></div>

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
