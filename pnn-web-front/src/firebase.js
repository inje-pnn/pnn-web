// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh3D7B5tpXYwC5t2KjAc1LPLkUppAt0-Y",
  authDomain: "pnn-web-4bad4.firebaseapp.com",
  projectId: "pnn-web-4bad4",
  storageBucket: "pnn-web-4bad4.firebasestorage.app",
  messagingSenderId: "961986237709",
  appId: "1:961986237709:web:a1dd841e35a7a340700c44",
  measurementId: "G-XF6SJJXFX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
