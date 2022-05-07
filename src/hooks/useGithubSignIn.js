import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// Firebase
import { auth } from '../firebase/config';
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth';

export const useGithubSignIn = () => {
  const [githuberr, setGithuberr] = useState(null);
  const { dispatch } = useAuthContext();

  const githubsignin = (provider) => {
    setGithuberr(null);
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const credential =
          GithubAuthProvider.credentialFromResult(userCredential);
        const token = credential.accessToken;

        dispatch({ type: 'SIGNIN', payload: userCredential.user });
        console.log('user sign in:', userCredential.user);
      })
      .catch((githuberr) => {
        setGithuberr(githuberr.message);
        console.log('error', githuberr);
      });
  };

  return { githuberr, githubsignin };
};
