// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA0LLtYydZ7Td6V-O9n1v20VllaCpPQI0o",
  authDomain: "portfolio-database-e5ef6.firebaseapp.com",
  databaseURL: "https://portfolio-database-e5ef6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-database-e5ef6",
  storageBucket: "portfolio-database-e5ef6.appspot.com",
  messagingSenderId: "37794729593",
  appId: "1:37794729593:web:53685ef5a5ecde57550ea8",
  measurementId: "G-5SPPEB94GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;