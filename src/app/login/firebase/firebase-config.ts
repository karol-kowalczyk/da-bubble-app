import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  User,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // Importiere Firebase Storage

// Deine Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyAh81UwaXL5hqI4sMGEzFVTDbekSJbeCT0",
  authDomain: "da-bubble-app.firebaseapp.com",
  projectId: "da-bubble-app",
  storageBucket: "da-bubble-app.appspot.com",
  messagingSenderId: "727256499474",
  appId: "1:727256499474:web:02040277d8cfc853c71fcb"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app); // Initialisiere Firebase Storage

// Funktionen und Typen exportieren
export {
  auth,
  storage, // Exportiere Firebase Storage
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut
};
export type { User };
