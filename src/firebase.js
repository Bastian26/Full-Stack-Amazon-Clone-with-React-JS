//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAwnwuxHiU_L-7VGCVBjWP2Pa5Qs8pB2eY",
  authDomain: "challenge-94891.firebaseapp.com",
  projectId: "challenge-94891",
  storageBucket: "challenge-94891.appspot.com",
  messagingSenderId: "686294510361",
  appId: "1:686294510361:web:e7e940c947df607eee3388",
};

/*const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.filestore();
const auth = firebase.auth();

export { db, auth }; */

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

export { db, auth, storage };
