import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';
import ButtonInline from '../components/ButtonInline';

import { ReactComponent as ShowcaseImage } from '../assets/svg/showcase_hero.svg';
import { ReactComponent as TodoImage } from '../assets/svg/todo.svg';

export default function Showcases() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Showcase'}
        SubTitle={'Where React Shines'}
        Text={'Small beginning for now. More apps are coming here.'}
        Image={<ShowcaseImage />}
      />
      <Tagline
        Title={'Simple To Do List'}
        Subtitle={'A Small Beginning'}
        Content={
          'This website is built with React. All of sub apps in this website are also created with React. Check out my commit history on Github for progress.'
        }
      />
      <div className="img-center">
        <TodoImage />
      </div>
      <ButtonInline LinkTo={'/todolist'}>Check This Out</ButtonInline>
      <Tagline
        Title={'More Coming Soon'}
        Subtitle={'After a Small Beginning...'}
        Content={
          '“Each step you take reveals a new horizon. You have taken the first step today. Now I challenge you to take another.” Dan Poynter'
        }
      />
      <Footer />
    </>
  );
}
