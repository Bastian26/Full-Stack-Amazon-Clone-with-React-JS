import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwnwuxHiU_L-7VGCVBjWP2Pa5Qs8pB2eY",
  authDomain: "challenge-94891.firebaseapp.com",
  projectId: "challenge-94891",
  storageBucket: "challenge-94891.appspot.com",
  messagingSenderId: "686294510361",
  appId: "1:686294510361:web:e7e940c947df607eee3388",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
//const db = firebase;

export { auth };

/*
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwnwuxHiU_L-7VGCVBjWP2Pa5Qs8pB2eY",
  authDomain: "challenge-94891.firebaseapp.com",
  projectId: "challenge-94891",
  storageBucket: "challenge-94891.appspot.com",
  messagingSenderId: "686294510361",
  appId: "1:686294510361:web:e7e940c947df607eee3388",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore();
const auth = firebase.auth();

export { db, auth };
*/
