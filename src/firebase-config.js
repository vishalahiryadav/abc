// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhfWMJdOQXSZ9yAl_ONxmmDw2O-f2ZR6I",
  authDomain: "blog-app-3b35a.firebaseapp.com",
  databaseURL: "https://blog-app-3b35a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blog-app-3b35a",
  storageBucket: "blog-app-3b35a.appspot.com",
  messagingSenderId: "937858857294",
  appId: "1:937858857294:web:901a6d2c61531cc164061f",
  measurementId: "G-54Y6HLQ2BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)