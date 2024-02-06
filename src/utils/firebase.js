// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgP8mGsK5_Tx-S1DApKN7hQqIaa_cdPD8",
  authDomain: "netflixgpt-ed17a.firebaseapp.com",
  projectId: "netflixgpt-ed17a",
  storageBucket: "netflixgpt-ed17a.appspot.com",
  messagingSenderId: "678678998943",
  appId: "1:678678998943:web:80b0918951bdf2ebb397aa",
  measurementId: "G-030YYWVXVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();