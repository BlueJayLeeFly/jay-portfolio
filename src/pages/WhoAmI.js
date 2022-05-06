import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';

import { ReactComponent as WhoAmISvg } from '../assets/svg/whoami_hero.svg';
import { ReactComponent as KidsCodingSvg } from '../assets/svg/kids_coding.svg';
import { ReactComponent as BakerSvg } from '../assets/svg/baker.svg';

export default function WhoAmI() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Who Am I?'}
        SubTitle={'I Love to Learn React'}
        Text={'I drink a Cup of Coffee at 10pm If I Need to Learn Something.'}
        Image={<WhoAmISvg />}
      />
      <Tagline
        Title={'Hello World!'}
        Subtitle={'My Coding Journey Started at 10 but...'}
        Content={
          'I... actually my mom signed up for after-school coding program when I was 10 years old for a couple of years.'
        }
      />
      <KidsCodingSvg className="kids-coding-svg" />
      <Tagline
        Title={'But I chose a different career path'}
        Subtitle={'and became a food developer in a bread company.'}
        Content={'and then worked at Hilton. Food...Food...Food'}
      />
      <BakerSvg className="baker-svg" />
      <Tagline
        Title={'Hello World Again!'}
        Subtitle={'My Coding Journey Started Again'}
        Content={'Write something here'}
      />
      <Footer />
    </>
  );
}
