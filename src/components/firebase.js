// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-hG7_MHASJycyBc8g7KZe_mXTBChSsSQ",
  authDomain: "vervein-7d21a.firebaseapp.com",
  projectId: "vervein-7d21a",
  storageBucket: "vervein-7d21a.appspot.com",
  messagingSenderId: "427997870959",
  appId: "1:427997870959:web:1732fb68fbafd6a9a6069a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore();
export const googleProvider = new GoogleAuthProvider();