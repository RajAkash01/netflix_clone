// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB0ZD5xwzRqA4PN65mWPYlMwCUq9ezVo9U',
  authDomain: 'netflix-clone-1f52a.firebaseapp.com',
  projectId: 'netflix-clone-1f52a',
  storageBucket: 'netflix-clone-1f52a.appspot.com',
  messagingSenderId: '963435113803',
  appId: '1:963435113803:web:35e5a2e0ed062beebf0cce',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
