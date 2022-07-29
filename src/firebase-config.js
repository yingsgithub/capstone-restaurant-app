import { initializeApp } from "firebase/app";
// { initializeApp } the func we call to create the connection

import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdvdf-nIAdND7DVkG4ybwEUaADAA7uObQ",
  // put in .env later
  authDomain: "restaurant-cloud.firebaseapp.com",
  projectId: "restaurant-cloud",
  storageBucket: "restaurant-cloud.appspot.com",
  messagingSenderId: "732205387328",
  appId: "1:732205387328:web:7f6d4d37282ade8dab19a5",
  measurementId: "G-M9386JGDT7",
};

// Initialize Firebase
//establish connection:
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//populate db variable with all the firestore information of app in line 23, and export to use it
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
