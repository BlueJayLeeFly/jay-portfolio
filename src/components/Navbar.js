import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ReactComponent as Logo } from '../assets/Jay_logo.svg';
import MenuIcon from '../assets/menu-icon';

import Close from '../assets/close';
import Github from '../assets/logo-github';
import LinkedIn from '../assets/logo-linkedin';

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  function handleIconClick() {
    setOpenNav(!openNav);
    console.log(openNav);
  }

  return (
    <>
      <nav>
        <div className={styles.logo}>
          <Logo width="80" height="80" />
        </div>
        <button className={styles.menuicon} onClick={handleIconClick}>
          <MenuIcon />
        </button>
      </nav>

      {openNav && (
        <section className={styles.menu}>
          <div className={styles['menu-top']}>
            <button className={styles.close} onClick={handleIconClick}>
              <Close />
            </button>
          </div>

          <div className={styles['menu-content']}>
            <Link to={'/'}> Home </Link>
            <Link to={'/'}> Who Am I? </Link>
            <Link to={'/'}> Showcases </Link>
            <Link to={'/'}> Roadmap </Link>
            <Link to={'/'}> Contact </Link>
            <button>Sign In</button>
            <button>Sign Up</button>

            <div className={styles.logos}>
              <Link to={'/'}>
                <Github />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Navbar;
