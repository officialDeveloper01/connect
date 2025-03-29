import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyBpoopD2fYDjnN_pe-uIQeui3nq06ECPBI",
  authDomain: "react-chat-app-8d8ae.firebaseapp.com",
  databaseURL: "https://react-chat-app-8d8ae-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-8d8ae",
  storageBucket: "react-chat-app-8d8ae.firebasestorage.app",
  messagingSenderId: "1043905495263",
  appId: "1:1043905495263:web:55ca819801115abebc296a",
  measurementId: "G-G5Q23CQ4PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const firebaseAuth = getAuth(app);
const firebaseDatabase = getDatabase(app);

// Export the services
export { firebaseAuth, firebaseDatabase };