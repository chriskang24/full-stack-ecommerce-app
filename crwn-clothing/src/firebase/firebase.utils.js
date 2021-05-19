import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDEELfhWIXhzaoInCLF8ahw5R4DeR6r2jY",
  authDomain: "full-stack-ecommerce-app-84535.firebaseapp.com",
  projectId: "full-stack-ecommerce-app-84535",
  storageBucket: "full-stack-ecommerce-app-84535.appspot.com",
  messagingSenderId: "324230939497",
  appId: "1:324230939497:web:089f540f65a96370afb3f8",
  measurementId: "G-HGXGV1WD52"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
