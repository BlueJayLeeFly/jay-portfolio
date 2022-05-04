import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';
import ButtonInline from '../components/ButtonInline';

import { Outlet, Routes, Route } from 'react-router-dom';
import ToDoList from '../pages/ToDoList';

import { ReactComponent as ShowcaseImage } from '../assets/showcase_hero.svg';
import { ReactComponent as TodoImage } from '../assets/todo.svg';

export default function Showcases() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Showcase'}
        SubTitle={'Where React Shines'}
        Text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        Image={<ShowcaseImage />}
      />
      <Tagline
        Title={'To Do List'}
        Subtitle={'A Small Beginning'}
        Content={
          'This website is built with React. All of sub apps in this website are also created with React. Check out my commit history on Github for progress.'
        }
      />
      <div className="img-center">
        <TodoImage />
      </div>
      <ButtonInline LinkTo={'/todolist'}>Check This Out</ButtonInline>
      <Footer />
    </>
  );
}
