import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Tagline from '../components/Tagline';

import { ReactComponent as WebBrowserSvg } from '../assets/browser.svg';
import { ReactComponent as ShortcutSvg } from '../assets/shortcut.svg';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tagline
        Title={'Build With React'}
        Subtitle={'Of React, For React, By React'}
        Content={
          'This website is built with React. All of sub apps in this website are also created with React. You can check out my commit history on Github.'
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
      <Card />
    </>
  );
}
