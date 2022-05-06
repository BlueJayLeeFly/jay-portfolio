import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// Firebase
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signin = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({ type: 'SIGNIN', payload: userCredential.user });
        console.log('user sign in:', userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { error, signin };
};
