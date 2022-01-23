import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDF-HS2_Gn_Di4hwVURqkS1h_Geo0ZciiQ",
  authDomain: "curso-react-21-22.firebaseapp.com",
  projectId: "curso-react-21-22",
  storageBucket: "curso-react-21-22.appspot.com",
  messagingSenderId: "930007762792",
  appId: "1:930007762792:web:63929aa75688385b37b8dd",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
