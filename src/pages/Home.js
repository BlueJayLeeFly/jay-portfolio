import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import CardHolder from '../components/CardHolder';
import Tagline from '../components/Tagline';
import ThreeColHero from '../components/ThreeColHero';
import Footer from '../components/Footer';

import { ReactComponent as WebBrowserSvg } from '../assets/browser.svg';
import { ReactComponent as ShortcutSvg } from '../assets/shortcut.svg';
import { ReactComponent as RoadmapSvg } from '../assets/roadmap.svg';
import { ReactComponent as HeroImage } from '../assets/main_hero.svg';
import { ReactComponent as ContactImage } from '../assets/contact_hero.svg';
import { ReactComponent as FbMsgImage } from '../assets/fb_msg.svg';
import { ReactComponent as WhatsappImage } from '../assets/whatsapp.svg';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        Title={'Jay Lee'}
        SubTitle={'(Food Developer, Event) => React Developer'}
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
        Subtitle={'How to Contact Me'}
        Content={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta'
        }
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
          >
            <FbMsgImage width="80%" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/19053582164" target="_blank">
            <WhatsappImage width="80%" />
          </a>
        </div>
      </ThreeColHero>
      <Footer />
    </>
  );
}
