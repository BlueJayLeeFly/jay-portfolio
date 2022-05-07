import { useState } from 'react';
import { useSignIn } from '../hooks/useSignIn';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSignout } from '../hooks/useSignout';
import Github from '../assets/jsx-icons/logo-github';
import Google from '../assets/jsx-icons/google';
import Facebook from '../assets/jsx-icons/logo-facebook';

// Google Auth
import { GoogleAuthProvider } from 'firebase/auth';
import { useGoogleSignIn } from '../hooks/useGoogleSignIn';

// Facebook
import { FacebookAuthProvider } from 'firebase/auth';
import { useFacebookSignIn } from '../hooks/useFacebookSignIn';

// Github
import { GithubAuthProvider } from 'firebase/auth';
import { useGithubSignIn } from '../hooks/useGithubSignIn';

import styles from './SignInForm.module.css';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, signin } = useSignIn();
  const { user } = useAuthContext();
  const { signout } = useSignout();

  // New Auth
  const { googleerr, googlesignin } = useGoogleSignIn();
  const { facebookerr, facebooksignin } = useFacebookSignIn();
  const { githuberr, githubsignin } = useGithubSignIn();

  // New Auth Providers
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signin(email, password);
  };

  const handleGoogleSignIn = () => {
    googlesignin(googleProvider);
  };

  const handleFacebookSignIn = () => {
    facebooksignin(facebookProvider);
  };

  const handleGithubSignIn = () => {
    githubsignin(githubProvider);
  };

  if (user) {
    return (
      <div className={styles['signout-container']}>
        <h3>Welcome {user.displayName}</h3>
        <button className={styles.signout} onClick={signout}>
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <>
        <form className={styles.signin} onSubmit={handleFormSubmit}>
          <label>
            <span>Email</span>
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button type="submit">Sign In with Email</button>
          <div className={styles['signin-icons']}>
            <button onClick={handleGoogleSignIn}>
              <Google />
            </button>
            <button onClick={handleFacebookSignIn}>
              <Facebook />
            </button>
            <button onClick={handleGithubSignIn}>
              <Github />
            </button>
          </div>
          {error && <p>{error}</p>}
        </form>
        <Link to="/signup">
          Wanna Sign Up with Your Email? Go to{' '}
          <span className="text-underline">Sign Up</span>
        </Link>
      </>
    );
  }
}
