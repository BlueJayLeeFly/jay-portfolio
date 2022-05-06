import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSignout } from '../hooks/useSignout';
import styles from './Navbar.module.css';
import { ReactComponent as Logo } from '../assets/Jay_logo.svg';
import MenuIcon from '../assets/menu-icon';

import Close from '../assets/close';
import Github from '../assets/logo-github';

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const { user, authIsReady } = useAuthContext();
  const { signout } = useSignout();
  let navigate = useNavigate();

  function handleIconClick() {
    setOpenNav(!openNav);
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
            {user && <h2>Hello {user.displayName}</h2>}
            <Link to={'/'}> Home </Link>
            <Link to={'/whoami'}> Who Am I? </Link>
            <Link to={'/showcases'}> Showcases </Link>
            <Link to={'/roadmap'}> Roadmap </Link>
            <Link to={'/contact'}> Contact </Link>
            {/* Hide Sign in and up button and show Sign out button */}
            {user ? (
              <button onClick={signout} className={styles['nav-btn']}>
                Sign Out
              </button>
            ) : (
              <>
                <button
                  className={styles['nav-btn']}
                  onClick={() => navigate('/signin')}
                >
                  Sign In
                </button>
                <button
                  className={styles['nav-btn']}
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </button>
              </>
            )}

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
