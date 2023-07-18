import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDN6BllwkqXUN84M55dWqOD5N8wgkSa_2o",
  authDomain: "react-notes-1da10.firebaseapp.com",
  projectId: "react-notes-1da10",
  storageBucket: "react-notes-1da10.appspot.com",
  messagingSenderId: "549156354052",
  appId: "1:549156354052:web:4e02b1ad884eda96241d51"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")