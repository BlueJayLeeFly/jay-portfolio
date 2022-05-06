import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import CardHolder from '../components/CardHolder';
import Tagline from '../components/Tagline';
import ThreeColHero from '../components/ThreeColHero';
import Footer from '../components/Footer';

import { ReactComponent as WebBrowserSvg } from '../assets/svg/browser.svg';
import { ReactComponent as ShortcutSvg } from '../assets/svg/shortcut.svg';
import { ReactComponent as RoadmapSvg } from '../assets/svg/roadmap.svg';
import { ReactComponent as HeroImage } from '../assets/svg/main_hero.svg';
import { ReactComponent as ContactImage } from '../assets/svg/contact_hero.svg';
import { ReactComponent as FbMsgImage } from '../assets/svg/fb_msg.svg';
import { ReactComponent as WhatsappImage } from '../assets/svg/whatsapp.svg';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Jay Lee'}
        SubTitle={'(Food Developer, Event) => React Developer'}
        Text={
          'From Food Developer to React Developer...Drastic Changes to Do What I Love to Do'
        }
        Image={<HeroImage />}
      />
      <Tagline
        Title={'Build With React'}
        Subtitle={'Of React, For React, By React'}
        Content={
          'This website is built with React. All of sub apps in this website are also created with React.'
        }
      />
      <WebBrowserSvg className="browser-svg" />
      <Tagline
        Title={'Shortcuts'}
        Subtitle={'Different Ways to Get to Know Me'}
        Content={'Different Ways to Get to Know Me'}
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
        Subtitle={'How to Contact Me'}
        Content={'You have different options to connect with me. Your choice.'}
      />
      <ThreeColHero>
        <div>
          <ContactImage />
          <a href="mailto:lsj2767@hotmail.com">lsj2767@hotmail.com</a>
          <a href="tel:905-358-2164">905-358-2164</a>
        </div>
        <div>
          <a
            href="https://www.messenger.com/t/100054216151530/"
            target="_blank"
            rel="noreferrer"
          >
            <FbMsgImage width="80%" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/19053582164" target="_blank" rel="noreferrer">
            <WhatsappImage width="80%" />
          </a>
        </div>
      </ThreeColHero>
      <Footer />
    </>
  );
}
