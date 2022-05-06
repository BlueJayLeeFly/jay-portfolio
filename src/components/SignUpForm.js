import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSignout } from '../hooks/useSignout';

import styles from './SignUpForm.module.css';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { error, signup } = useSignup();
  const { user } = useAuthContext();
  const { signout } = useSignout();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    signup(displayName, email, password);
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
      <form className={styles.signup} onSubmit={handleFormSubmit}>
        <label>
          <span>Display Name</span>
          <input
            required
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>

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
        <button>Sign Up</button>
        {error && <p>{error}</p>}
        <Link to="/signin">Already Signed Up? Go to Sign In</Link>
      </form>
    );
  }
}
