import styles from './CardHolder.module.css';
import Card from './Card';

import ImageOne from '../assets/card_1.svg';
import ImageTwo from '../assets/card_2.svg';
import ImageThree from '../assets/card_3.svg';
import ImageFour from '../assets/card_4.svg';
import ImageFive from '../assets/card_5.svg';
import ImageSix from '../assets/card_6.svg';

export default function CardHolder() {
  return (
    <div className={styles['card-container']}>
      <Card
        gradient="gradient-one"
        image={ImageOne}
        title="Who am I?"
        text="Big fan of React"
        buttonText="Learn More"
      />
      <Card
        gradient="gradient-two"
        image={ImageTwo}
        title="Showcases"
        text="Where React shines"
        buttonText="Learn More"
      />
      <Card
        gradient="gradient-three"
        image={ImageThree}
        title="Roadmap"
        text="My Future Plan"
        buttonText="Learn More"
      />
      <Card
        gradient="gradient-four"
        image={ImageFour}
        title="LinkedIn"
        text="If You Like to See My Profile"
        buttonText="Learn More"
      />
      <Card
        gradient="gradient-five"
        image={ImageFive}
        title="Github"
        text="My Commit History Tells All"
        buttonText="Learn More"
      />
      <Card
        gradient="gradient-six"
        image={ImageSix}
        title="Contact"
        text="Feel Free to Contact Me"
        buttonText="Learn More"
      />
    </div>
  );
}
