import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { ReactComponent as Logo } from '../assets/Jay_logo.svg';
import { ReactComponent as Github } from '../assets/logo-github.svg';
import { ReactComponent as LinkedIn } from '../assets/logo-linkedin.svg';
import { ReactComponent as UrlSvg } from '../assets/url.svg';
import { ReactComponent as AvatarSvg } from '../assets/hair-man.svg';
import { ReactComponent as ShowCaseSvg } from '../assets/exhibition.svg';
import { ReactComponent as RoadSvg } from '../assets/road-2.svg';
import { ReactComponent as SignInSvg } from '../assets/password.svg';

export default function Footer() {
  return (
    <section className={styles['footer-container']}>
      <hr />
      <div className={styles['footer-content']}>
        <Logo width="100" height="100" />
        <Link
          className={`${styles['link-container']} ${styles['background-1']}`}
          to="/"
        >
          <AvatarSvg className={styles['first-icon']} width="32" height="32" />
          <UrlSvg className={styles['second-icon']} width="32" height="32" />
          <h4 className={styles.title}>Who Am I?</h4>
          <p className={styles.text}>I'll introduce myself</p>
        </Link>
        <Link
          className={`${styles['link-container']} ${styles['background-2']}`}
          to="/"
        >
          <ShowCaseSvg
            className={styles['first-icon']}
            width="32"
            height="32"
          />
          <UrlSvg className={styles['second-icon']} width="32" height="32" />
          <h4 className={styles.title}>Showcases</h4>
          <p className={styles.text}>Somethings to Show</p>
        </Link>
        <Link
          className={`${styles['link-container']} ${styles['background-3']}`}
          to="/"
        >
          <RoadSvg className={styles['first-icon']} width="32" height="32" />
          <UrlSvg className={styles['second-icon']} width="32" height="32" />
          <h4 className={styles.title}>Roadmap</h4>
          <p className={styles.text}>Check My Future Plan</p>
        </Link>
        <div>
          <p>905-321-4462</p>
          <p>lsj2767@hotmail.com</p>
          <a href="https://github.com/BlueJayLeeFly" target="_blank">
            <Github width="32" height="32" />
          </a>
          <a href="https://www.linkedin.com/in/jaylee0311/" target="_blank">
            <LinkedIn width="32" height="32" />
          </a>
        </div>
        <Link
          className={`${styles['link-container']} ${styles['background-4']}`}
          to="/"
        >
          <Github className={styles['first-icon']} width="32" height="32" />
          <UrlSvg className={styles['second-icon']} width="32" height="32" />
          <h4 className={styles.title}>Github</h4>
          <p className={styles.text}>Where All of History Go</p>
        </Link>
        <Link
          className={`${styles['link-container']} ${styles['background-5']}`}
          to="/"
        >
          <LinkedIn className={styles['first-icon']} width="32" height="32" />
          <UrlSvg className={styles['second-icon']} width="32" height="32" />
          <h4 className={styles.title}>LinkedIn</h4>
          <p className={styles.text}>Check Out My LinkedIn</p>
        </Link>
        <Link
          className={`${styles['link-container']} ${styles['background-6']}`}
          to="/"
        >
          <SignInSvg className={styles['first-icon']} width="32" height="32" />
          <UrlSvg className={styles['second-icon']} width="32" height="32" />
          <h4 className={styles.title}>Sign In</h4>
          <p className={styles.text}>Sign In for a Test Run</p>
        </Link>
      </div>
      <div className={styles['footer-bottom']}>
        <div>[ Created by Jay Lee ]</div>
      </div>
    </section>
  );
}
