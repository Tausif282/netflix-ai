// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-cseJ98EsQKFfU8ReQO6j_yXOQraZveU",
  authDomain: "netflixai-3af68.firebaseapp.com",
  projectId: "netflixai-3af68",
  storageBucket: "netflixai-3af68.appspot.com",
  messagingSenderId: "75923418441",
  appId: "1:75923418441:web:de9b25ffea323acca67e98",
  measurementId: "G-T752YDNE12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
