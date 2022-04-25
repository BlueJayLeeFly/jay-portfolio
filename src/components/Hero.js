import './Hero.css';
import { ReactComponent as HeroImage } from '../images/main_hero.svg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content-container">
        <div className="hero-content-left">
          <h1>Jay Lee</h1>
          <h2>(Food Developer, Event) =&gt; React Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="hero-content-right">
          <HeroImage width="97%" height="97%" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
