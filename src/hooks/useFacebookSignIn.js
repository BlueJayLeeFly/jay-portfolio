import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// Firebase
import { auth } from '../firebase/config';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

export const useFacebookSignIn = () => {
  const [facebookerr, setFacebookerr] = useState(null);
  const { dispatch } = useAuthContext();

  const facebooksignin = (provider) => {
    setFacebookerr(null);
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const credential =
          FacebookAuthProvider.credentialFromResult(userCredential);
        const token = credential.accessToken;

        dispatch({ type: 'SIGNIN', payload: userCredential.user });
        console.log('user sign in:', userCredential.user);
      })
      .catch((facebookerr) => {
        setFacebookerr(facebookerr.message);
        console.log('error', facebookerr);
      });
  };

  return { facebookerr, facebooksignin };
};
