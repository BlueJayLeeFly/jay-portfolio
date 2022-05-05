import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';

import { ReactComponent as SignUpImage } from '../assets/signup_hero.svg';

export default function SignUp() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Sign Up'}
        SubTitle={'One Pass For Everything'}
        Text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        Image={<SignUpImage />}
        SignUp={true}
      />
      <Tagline
        Title={'One Pass For Test Runs'}
        Subtitle={'Of React, For React, By React'}
        Content={
          'This website is built with React. All of sub apps in this website are also created with React. Check out my commit history on Github for progress.'
        }
      />
      <Footer />
    </>
  );
}
