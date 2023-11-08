// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lab2-mern-estate.firebaseapp.com",
  projectId: "lab2-mern-estate",
  storageBucket: "lab2-mern-estate.appspot.com",
  messagingSenderId: "955291354121",
  appId: "1:955291354121:web:fa03294e9a2919536764d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);