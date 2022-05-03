import styles from './Hero.module.css';

function Hero({ Title, Subtitle, Text, Image }) {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-content-left']}>
        <h1>{Title}</h1>
        <h2>{Subtitle}</h2>
        <p>{Text}</p>
      </div>
      <div className={styles['hero-content-right']}>{Image}</div>
    </section>
  );
}

export default Hero;
