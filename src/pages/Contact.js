import ThreeColHero from '../components/ThreeColHero';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';

import { ReactComponent as ContactImage } from '../assets/contact_hero.svg';
import { ReactComponent as FbMsgImage } from '../assets/fb_msg.svg';
import { ReactComponent as WhatsappImage } from '../assets/whatsapp.svg';

export default function Contact() {
  return (
    <>
      <Navbar />
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
      <Tagline
        Title={'Jay Lee'}
        Subtitle={'Feel Free to Contact Me'}
        Content={
          'This website is built with React. All of sub apps in this website are also created with React. Check out my commit history on Github for progress.'
        }
      />
      <Footer />
    </>
  );
}
