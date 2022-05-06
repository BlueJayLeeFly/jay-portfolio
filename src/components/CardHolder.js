import styles from './CardHolder.module.css';
import Card from './Card';

import ImageOne from '../assets/svg/card_1.svg';
import ImageTwo from '../assets/svg/card_2.svg';
import ImageThree from '../assets/svg/card_3.svg';
import ImageFour from '../assets/svg/card_4.svg';
import ImageFive from '../assets/svg/card_5.svg';
import ImageSix from '../assets/svg/card_6.svg';

export default function CardHolder() {
  return (
    <div className={styles['card-container']}>
      <Card
        LinkTo={'/whoami'}
        gradient="gradient-one"
        image={ImageOne}
        title="Who am I?"
        text="Big fan of React"
        buttonText="Learn More"
      />
      <Card
        LinkTo={'/showcases'}
        gradient="gradient-two"
        image={ImageTwo}
        title="Showcases"
        text="Where React shines"
        buttonText="Learn More"
      />
      <Card
        LinkTo={'/roadmap'}
        gradient="gradient-three"
        image={ImageThree}
        title="Roadmap"
        text="My Future Plan"
        buttonText="Learn More"
      />
      <Card
        LinkTo={'/roadmap'}
        gradient="gradient-four"
        image={ImageFour}
        title="LinkedIn"
        text="If You Like to See My Profile"
        buttonText="Learn More"
      />
      <Card
        LinkTo={'/roadmap'}
        gradient="gradient-five"
        image={ImageFive}
        title="Github"
        text="My Commit History Tells All"
        buttonText="Learn More"
      />
      <Card
        LinkTo={'/contact'}
        gradient="gradient-six"
        image={ImageSix}
        title="Contact"
        text="Feel Free to Contact Me"
        buttonText="Learn More"
      />
    </div>
  );
}
