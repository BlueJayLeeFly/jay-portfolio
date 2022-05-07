import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// Firebase
import { auth } from '../firebase/config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const useGoogleSignIn = () => {
  const [googleerr, setGoogleerr] = useState(null);
  const { dispatch } = useAuthContext();

  const googlesignin = (provider) => {
    setGoogleerr(null);
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        console.log('Auth Starting');
        const credential =
          GoogleAuthProvider.credentialFromResult(userCredential);
        const token = credential.accessToken;

        dispatch({ type: 'SIGNIN', payload: userCredential.user });
        console.log('user sign in:', userCredential.user);
      })
      .catch((googleerr) => {
        setGoogleerr(googleerr.message);
      });
  };

  return { googleerr, googlesignin };
};
