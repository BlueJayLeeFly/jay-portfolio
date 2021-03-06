import { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSignout } from '../hooks/useSignout';
import styles from './Navbar.module.css';
import { ReactComponent as Logo } from '../assets/svg/Jay_logo.svg';
import MenuIcon from '../assets/jsx-icons/menu-icon';

import Close from '../assets/jsx-icons/close';

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useAuthContext();
  const { signout } = useSignout();
  let navigate = useNavigate();

  function handleIconClick() {
    setOpenNav(!openNav);
  }

  let activeStyle = {
    opacity: 1,
    fontSize: 60,
    textDecoration: 'underline',
  };

  return (
    <>
      <nav>
        <div className={styles.logo}>
          <Link to={'/'}>
            <Logo width="80" height="80" />
          </Link>
        </div>
        <button className={styles.menuicon} onClick={handleIconClick}>
          <MenuIcon />
        </button>
      </nav>

      {/* Modal Nav */}
      {openNav && (
        <section className={styles.menu}>
          <div className={styles['menu-top']}>
            <button className={styles.close} onClick={handleIconClick}>
              <Close />
            </button>
          </div>

          <div className={styles['menu-content']}>
            {user && (
              <h2>
                Hello <span>{user.displayName}</span>
              </h2>
            )}
            <NavLink
              to={'/'}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to={'/whoami'}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Who Am I?
            </NavLink>
            <NavLink
              to={'/showcases'}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Showcases
            </NavLink>
            <NavLink
              to={'/roadmap'}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Roadmap
            </NavLink>
            <NavLink
              to={'/contact'}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>

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
          </div>
        </section>
      )}
    </>
  );
}

export default Navbar;
