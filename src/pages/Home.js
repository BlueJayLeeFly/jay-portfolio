import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import CardHolder from '../components/CardHolder';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';

import { ReactComponent as WebBrowserSvg } from '../assets/browser.svg';
import { ReactComponent as ShortcutSvg } from '../assets/shortcut.svg';
import { ReactComponent as RoadmapSvg } from '../assets/roadmap.svg';
import { ReactComponent as HeroImage } from '../assets/main_hero.svg';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Jay Lee'}
        SubTitle={'(Food Developer, Event) =&gt; React Developer'}
        Text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        Image={<HeroImage />}
      />
      <Tagline
        Title={'Build With React'}
        Subtitle={'Of React, For React, By React'}
        Content={
          'This website is built with React. All of sub apps in this website are also created with React. Check out my commit history on Github for progress.'
        }
      />
      <WebBrowserSvg className="browser-svg" />
      <Tagline
        Title={'Shortcuts'}
        Subtitle={'What is Jay doing?'}
        Content={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta'
        }
      />
      <ShortcutSvg className="shortcut-svg" />
      <CardHolder />
      <Tagline
        Title={'More Updates Are Coming'}
        Subtitle={'TheEndOfRoad = undefined;'}
        Content={
          'Conceptual ideas will be on Roadmap and Actual updates will go to Showcases'
        }
      />
      <RoadmapSvg className="roadmap-svg" />
      <Tagline
        Title={'End With React'}
        Subtitle={'Ready to Hire Me?'}
        Content={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta'
        }
      />
      <Footer />
    </>
  );
}
