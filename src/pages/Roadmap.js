import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';

import { ReactComponent as RoadMapImage } from '../assets/roadmap_hero.svg';
import { ReactComponent as AdaptiveImage } from '../assets/adaptive.svg';
import { ReactComponent as TeamTodoImage } from '../assets/team-todo.svg';

export default function Roadmap() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Roadmap'}
        SubTitle={'The Plans to Go Further'}
        Text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        Image={<RoadMapImage />}
      />

      <Tagline
        Title={'Adaptive Layout'}
        Subtitle={'Show Customers Items Differently'}
        Content={
          '1000s products to show to your potential customers but 20 spots available. What is your choice? Display items based on location, numbers of clicks, order histories...These are what everybody uses. Customers will come back next season if your clothing lines up are boring. Give them something different.'
        }
      />
      <AdaptiveImage className="adaptive-svg" />

      <Tagline
        Title={'Team Todo List'}
        Subtitle={'Simple Todo List was a Warm Up'}
        Content={
          '1000s products to show to your potential customers but 20 spots available. What is your choice? Display items based on location, numbers of clicks, order histories...These are what everybody uses. Customers will come back next season if your clothing lines up are boring. Give them something different.'
        }
      />
      <TeamTodoImage className="team-todo-svg" />

      <Tagline
        Title={'More Coming Soon!'}
        Content={
          '1000s products to show to your potential customers but 20 spots available. What is your choice? Display items based on location, numbers of clicks, order histories...These are what everybody uses. Customers will come back next season if your clothing lines up are boring. Give them something different.'
        }
      />
      <Footer />
    </>
  );
}
