// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ee036.firebaseapp.com",
  projectId: "mern-estate-ee036",
  storageBucket: "mern-estate-ee036.appspot.com",
  messagingSenderId: "534722089533",
  appId: "1:534722089533:web:f3790347391dbbba4d9054",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
