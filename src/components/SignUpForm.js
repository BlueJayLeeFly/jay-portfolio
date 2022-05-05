import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

import styles from './SignUpForm.module.css';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, signup } = useSignup();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <form className={styles.signup} onSubmit={handleFormSubmit}>
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
    </form>
  );
}
