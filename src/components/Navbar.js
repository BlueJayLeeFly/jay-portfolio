import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ReactComponent as Logo } from '../assets/Jay_logo.svg';
import MenuIcon from '../assets/menu-icon';

import FooterCard from './FooterCard';
import { ReactComponent as HeroImage } from '../assets/main_hero.svg';
import Close from '../assets/close';
import HairMan from '../assets/hair-man';

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
            <FooterCard
              LinkTo={'/'}
              Icon={<HairMan />}
              Title={'Who Am I?'}
              Text={'I will introduce myself'}
              BackgroundColor={'background-1'}
            />
            <FooterCard
              LinkTo={'/'}
              Icon={<HairMan />}
              Title={'Who Am I?'}
              Text={'I will introduce myself'}
              BackgroundColor={'background-1'}
            />
            <FooterCard
              LinkTo={'/'}
              Icon={<HairMan />}
              Title={'Who Am I?'}
              Text={'I will introduce myself'}
              BackgroundColor={'background-1'}
            />
            <FooterCard
              LinkTo={'/'}
              Icon={<HairMan />}
              Title={'Who Am I?'}
              Text={'I will introduce myself'}
              BackgroundColor={'background-1'}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Navbar;
