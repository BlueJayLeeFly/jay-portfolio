import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';

import { ReactComponent as RoadMapImage } from '../assets/svg/roadmap_hero.svg';
import { ReactComponent as AdaptiveImage } from '../assets/svg/adaptive.svg';
import { ReactComponent as TeamTodoImage } from '../assets/svg/team-todo.svg';

export default function Roadmap() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Roadmap'}
        SubTitle={'The Plans to Go Further'}
        Text={'This is place you can check out my future plan.'}
        Image={<RoadMapImage />}
      />

      <Tagline
        Title={'Adaptive Layout'}
        Subtitle={'Show Customers Your Items Differently'}
        Content={
          '1000s products to show to your potential customers but 20 spots available. What is your choice? Display items based on location, numbers of clicks, order histories...These are what everybody uses. Customers will come back next season if your clothing lines up are boring. Give them something different.'
        }
      />
      <AdaptiveImage className="adaptive-svg" />

      <Tagline
        Title={'Team Todo List'}
        Subtitle={'Simple Todo List was a Warm Up'}
        Content={
          "It's an extended version of typical todo list. Team members share todo lists. All of assigned team members have to check boxes to clear the tasks. Share ideas and more."
        }
      />
      <TeamTodoImage className="team-todo-svg" />

      <Tagline
        Title={'More Coming Soon!'}
        Content={'I will always challenge myself to improve my skills.'}
      />
      <Footer />
    </>
  );
}
