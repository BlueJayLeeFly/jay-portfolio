// Firebase
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

export const useSignout = () => {
  const signout = () => {
    signOut(auth)
      .then(() => {
        console.log('user Signed out');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return { signout };
};
