import { useState } from 'react';

// Firebase
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useSignIn = () => {
  const [error, setError] = useState(null);

  const signin = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('user sign in:', userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { error, signin };
};
