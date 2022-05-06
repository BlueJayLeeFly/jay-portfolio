import { useState } from 'react';
import { useSignIn } from '../hooks/useSignIn';
import { Link } from 'react-router-dom';

import styles from './SignInForm.module.css';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, signin } = useSignIn();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signin(email, password);
  };

  return (
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
      <button>Sign In</button>
      {error && <p>{error}</p>}
      <Link to="/signup">Didn't Register Yet? Go to Sign Up</Link>
    </form>
  );
}
