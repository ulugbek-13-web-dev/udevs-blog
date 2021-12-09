import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCkktQPPzo9A064PGO5T5cTfV_GsRccHQk",
  authDomain: "udevs-blog-4085a.firebaseapp.com",
  projectId: "udevs-blog-4085a",
  storageBucket: "udevs-blog-4085a.appspot.com",
  messagingSenderId: "466955892979",
  appId: "1:466955892979:web:fa4c6b8de6e414ae599f86",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore();