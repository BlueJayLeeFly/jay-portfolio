import styles from './ThreeColHero.module.css';

export default function ThreeColHero(props) {
  return <div className={styles['three-grid-container']}>{props.children}</div>;
}
