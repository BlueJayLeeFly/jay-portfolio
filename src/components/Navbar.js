import styles from './Navbar.module.css';
import { ReactComponent as Logo } from '../assets/Jay_logo.svg';

function Navbar() {
  return (
    <>
      <nav>
        <div className={styles.logo}>
          <Logo width="80" height="80" />
        </div>

        <ul className={styles.menu}>
          <li>HOME</li>
          <li>WHOAMI</li>
          <li>SHOWCASES</li>
          <li>ROADMAP</li>
          <li>CONTACT</li>
        </ul>

        <ul className={styles['member-area']}>
          <li>SIGN IN</li>
          <li>SIGN UP</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
