import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC6mpyNbLc-Wr9oMtRKap8Bek6GfLxGGaE',
  authDomain: 'react-ecommerce-cb3d4.firebaseapp.com',
  projectId: 'react-ecommerce-cb3d4',
  storageBucket: 'react-ecommerce-cb3d4.appspot.com',
  messagingSenderId: '335892600335',
  appId: '1:335892600335:web:5af9a5d4b6f1f05c2a357a',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
