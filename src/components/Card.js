import styles from './Card.module.css';
import { ReactComponent as Test } from '../assets/main_hero.svg';

function Card() {
  return (
    <div className={styles['card-container']}>
      <Test className={styles['card-vector']} />
      <h2>Testing Card</h2>
      <p>Learn React</p>
    </div>
  );
}

export default Card;
