import styles from './Tagline.module.css';

export default function Tagline({ Title, Subtitle, Content }) {
  return (
    <>
      <h2 className={styles.title}>{Title}</h2>
      <h3 className={styles.subtitle}>{Subtitle}</h3>
      <p className={styles.content}>{Content}</p>
    </>
  );
}
