// Firebase
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useSignout = () => {
  const { dispatch } = useAuthContext();

  const signout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'SIGNOUT' });
        console.log('user Signed out');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return { signout };
};
