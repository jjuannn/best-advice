import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUjZGbQLLdhDy2nkcBw1eeym6MsfAdzmU",
  authDomain: "best-advice-2.firebaseapp.com",
  projectId: "best-advice-2",
  storageBucket: "best-advice-2.appspot.com",
  messagingSenderId: "633335878701",
  appId: "1:633335878701:web:ed49b25e0b8456757e54a4",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
