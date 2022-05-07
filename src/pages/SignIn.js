import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';

import { ReactComponent as SignInImage } from '../assets/svg/signin_hero.svg';

export default function SignIn() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Sign In'}
        SubTitle={'Test With Your Accounts'}
        Text={
          'Sign in with your Google, Facebook and Github account without signing up'
        }
        Image={<SignInImage />}
        SignIn={true}
      />
      <Tagline
        Title={'To Do List'}
        Subtitle={'Of React, For React, By React'}
        Content={
          'This website is built with React. All of sub apps in this website are also created with React. Check out my commit history on Github for progress.'
        }
      />
      <Footer />
    </>
  );
}
