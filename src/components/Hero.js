import styles from './Hero.module.css';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

function Hero(props) {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-content-left']}>
        <h1>{props.Title}</h1>
        <h2>{props.SubTitle}</h2>
        <p>{props.Text}</p>
        {props.SignUp && <SignUpForm />}
        {props.SignIn && <SignInForm />}
      </div>
      <div className={styles['hero-content-right']}>{props.Image}</div>
    </section>
  );
}

export default Hero;
