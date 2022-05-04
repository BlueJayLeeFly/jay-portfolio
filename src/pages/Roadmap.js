import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';

import { ReactComponent as RoadMapImage } from '../assets/roadmap_hero.svg';

export default function Roadmap() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Showcase'}
        SubTitle={'Where React Shines'}
        Text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        Image={<RoadMapImage />}
      />
      <Tagline
        Title={'Plans For The Future'}
        Subtitle={'Of React, For React, By React'}
        Content={
          'This website is built with React. All of sub apps in this website are also created with React. Check out my commit history on Github for progress.'
        }
      />
      <Footer />
    </>
  );
}
