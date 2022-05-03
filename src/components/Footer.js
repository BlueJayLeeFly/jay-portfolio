import styles from './Footer.module.css';
import FooterCard from './FooterCard';

// Icons
import { ReactComponent as Logo } from '../assets/Jay_logo.svg';
import HairMan from '../assets/hair-man';
import Github from '../assets/logo-github';
import LinkedIn from '../assets/logo-linkedin';
import RoadSvg from '../assets/road-2';
import ShowCaseSvg from '../assets/exhibition';
import SignInSvg from '../assets/password';

export default function Footer() {
  return (
    <section className={styles['footer-container']}>
      <hr />
      <div className={styles['footer-content']}>
        <div>
          <Logo width="100" height="100" />
        </div>
        <div>
          <FooterCard
            LinkTo={'/'}
            Icon={<HairMan />}
            Title={'Who Am I?'}
            Text={'I will introduce myself'}
            BackgroundColor={'background-1'}
          />
        </div>
        <div>
          <FooterCard
            LinkTo={'/'}
            Icon={<ShowCaseSvg />}
            Title={'Showcases'}
            Text={'Somethings to Show'}
            BackgroundColor={'background-2'}
          />
        </div>
        <div>
          <FooterCard
            LinkTo={'/'}
            Icon={<RoadSvg />}
            Title={'Roadmap'}
            Text={'Check My Future Plan'}
            BackgroundColor={'background-3'}
          />
        </div>
        <div>
          <p>905-321-4462</p>
          <p>lsj2767@hotmail.com</p>
          <a href="https://github.com/BlueJayLeeFly" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/jaylee0311/" target="_blank">
            <LinkedIn />
          </a>
        </div>
        <div>
          <FooterCard
            LinkTo={'/'}
            Icon={<Github />}
            Title={'Github'}
            Text={'Where All of History Go'}
            BackgroundColor={'background-4'}
          />
        </div>
        <div>
          <FooterCard
            LinkTo={'/'}
            Icon={<LinkedIn />}
            Title={'LinkedIn'}
            Text={'Check Out My LinkedIn'}
            BackgroundColor={'background-5'}
          />
        </div>
        <div>
          <FooterCard
            LinkTo={'/'}
            Icon={<SignInSvg />}
            Title={'Sign In'}
            Text={'Sign In for a Test Run'}
            BackgroundColor={'background-6'}
          />
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <div>[ Created by Jay Lee ]</div>
      </div>
    </section>
  );
}
