import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';

import { ReactComponent as WhoAmISvg } from '../assets/whoami_hero.svg';
import { ReactComponent as KidsCodingSvg } from '../assets/kids_coding.svg';
import { ReactComponent as BakerSvg } from '../assets/baker.svg';

export default function WhoAmI() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Who Am I?'}
        SubTitle={'Where React Shines'}
        Text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        Image={<WhoAmISvg />}
      />
      <Tagline
        Title={'Hello World!'}
        Subtitle={'My Coding Journey Started at 10 but...'}
        Content={
          'I... actually my mom signed up after school coding program when I was 10 years old for a couple of years.'
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
