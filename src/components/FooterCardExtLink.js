// Component is created to avoid React Router interception

import styles from './FooterCardExtLink.module.css';

import Url from '../assets/jsx-icons/url';

export default function FooterCard({
  LinkTo,
  Icon,
  Title,
  Text,
  BackgroundColor,
}) {
  return (
    <a
      className={`${styles['link-container']} ${styles[BackgroundColor]}`}
      href={LinkTo}
      target="_blank"
      rel="noreferrer"
    >
      {Icon}
      <div className={styles['second-icon']}>
        <Url />
      </div>
      <h4 className={styles.title}>{Title}</h4>
      <p className={styles.text}>{Text}</p>
    </a>
  );
}
