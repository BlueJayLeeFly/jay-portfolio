import { Link } from 'react-router-dom';
import styles from './FooterCard.module.css';

import Url from '../assets/url';

export default function FooterCard({
  LinkTo,
  Icon,
  Title,
  Text,
  BackgroundColor,
}) {
  return (
    <Link
      className={`${styles['link-container']} ${styles[BackgroundColor]}`}
      to={LinkTo}
    >
      {Icon}
      <div className={styles['second-icon']}>
        <Url />
      </div>
      <h4 className={styles.title}>{Title}</h4>
      <p className={styles.text}>{Text}</p>
    </Link>
  );
}
