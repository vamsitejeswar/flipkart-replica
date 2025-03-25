import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM4KTteKXOZTJe9GEo4wW42hucSPGg6Rc",
  authDomain: "reactpro-66c50.firebaseapp.com",
  projectId: "reactpro-66c50",
  storageBucket: "reactpro-66c50.firebasestorage.app",
  messagingSenderId: "450519876857",
  appId: "1:450519876857:web:ee411403cd01f6a1b38e28"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
