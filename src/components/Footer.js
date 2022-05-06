import styles from './Footer.module.css';
import FooterCard from './FooterCard';
import FooterCardExtLink from './FooterCardExtLink';

// Icons
import { ReactComponent as Logo } from '../assets/svg/Jay_logo.svg';
import HairMan from '../assets/jsx-icons/hair-man';
import Github from '../assets/jsx-icons/logo-github';
import LinkedIn from '../assets/jsx-icons/logo-linkedin';
import RoadSvg from '../assets/jsx-icons/road-2';
import ShowCaseSvg from '../assets/jsx-icons/exhibition';
import SignInSvg from '../assets/jsx-icons/password';
import SignUp from '../assets/jsx-icons/signup';

export default function Footer() {
  return (
    <section className={styles['footer-container']}>
      <hr />
      <div className={styles['footer-content']}>
        <div className={styles.logo}>
          <Logo width="100" height="100" />
        </div>
        <div>
          <FooterCard
            LinkTo={'/whoami'}
            Icon={<HairMan />}
            Title={'Who Am I?'}
            Text={'I will introduce myself'}
            BackgroundColor={'background-1'}
          />
        </div>
        <div>
          <FooterCard
            LinkTo={'/showcases'}
            Icon={<ShowCaseSvg />}
            Title={'Showcases'}
            Text={'Somethings to Show'}
            BackgroundColor={'background-2'}
          />
        </div>
        <div>
          <FooterCard
            LinkTo={'/roadmap'}
            Icon={<RoadSvg />}
            Title={'Roadmap'}
            Text={'Check My Future Plan'}
            BackgroundColor={'background-3'}
          />
        </div>
        <div className="styles.githublogo">
          <FooterCardExtLink
            LinkTo={'https://github.com/BlueJayLeeFly'}
            Icon={<Github />}
            Title={'Github'}
            Text={'Where All of History Go'}
            BackgroundColor={'background-4'}
          />
        </div>
        <div>
          <FooterCardExtLink
            LinkTo={'https://www.linkedin.com/in/jaylee0311/'}
            Icon={<LinkedIn />}
            Title={'LinkedIn'}
            Text={'Check Out My LinkedIn'}
            BackgroundColor={'background-5'}
          />
        </div>
        <div>
          <FooterCard
            LinkTo={'/signin'}
            Icon={<SignInSvg />}
            Title={'Sign In'}
            Text={'Sign In for a Test Run'}
            BackgroundColor={'background-6'}
          />
        </div>
        <div>
          <FooterCard
            LinkTo={'/signup'}
            Icon={<SignUp />}
            Title={'Sign Up'}
            Text={'One Pass of everthing'}
            BackgroundColor={'background-7'}
          />
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <div>[ Created by Jay Lee ]</div>
      </div>
    </section>
  );
}
