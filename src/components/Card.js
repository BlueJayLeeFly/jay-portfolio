import styles from './Card.module.css';

function Card(props) {
  return (
    <div className={`${styles['card-container']} ${props.gradient}`}>
      <img src={props.image} className={styles['card-vector']} />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <button>{props.buttonText}</button>
    </div>
  );
}

export default Card;
