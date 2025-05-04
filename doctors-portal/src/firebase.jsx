// Import core Firebase and auth modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDGxjOcjLSyfbrJdDyITAYDmCDlYU2bASk",
  authDomain: "doctors-portal-bc85f.firebaseapp.com",
  projectId: "doctors-portal-bc85f",
  storageBucket: "doctors-portal-bc85f.firebasestorage.app",
  messagingSenderId: "505380332692",
  appId: "1:505380332692:web:1034a97392f69296590081",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Authentication instance and provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); // for Firestore

