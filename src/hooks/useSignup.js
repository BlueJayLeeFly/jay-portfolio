import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// Firebase
import { auth } from '../firebase/config';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (displayName, email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({ type: 'SIGNIN', payload: userCredential.user });
        console.log('user sign up:', userCredential.user);
        // Update Display Name
        updateProfile(userCredential.user, { displayName: displayName }).then(
          () => {
            console.log('Profile updated', displayName);
          }
        );
        // Email verification
        sendEmailVerification(userCredential.user).then(() => {
          console.log('Email Sent');
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { error, signup };
};
