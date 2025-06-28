// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4HzAkTRF5J2eXQl7p6u2Cq1BsYFz_N44",
  authDomain: "tutorspot-5114a.firebaseapp.com",
  projectId: "tutorspot-5114a",
  storageBucket: "tutorspot-5114a.firebasestorage.app",
  messagingSenderId: "476606809214",
  appId: "1:476606809214:web:0001775276f23bd10c442f",
  measurementId: "G-JMDVC0QFFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);