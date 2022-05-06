import { Link } from 'react-router-dom';

import styles from './Card.module.css';

function Card(props) {
  return (
    <div className={`${styles['card-container']} ${props.gradient}`}>
      <img src={props.image} className={styles['card-vector']} alt="card" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <Link className={styles.cardlink} to={props.LinkTo}>
        {props.buttonText}
      </Link>
    </div>
  );
}

export default Card;
