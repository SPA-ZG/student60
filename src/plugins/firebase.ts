import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9LvKhZ_8UXxxIRWhxXqzhbsiwAQHFZr4",
  authDomain: "lab6-99096.firebaseapp.com",
  projectId: "lab6-99096",
  storageBucket: "lab6-99096.appspot.com",
  messagingSenderId: "750415354353",
  appId: "1:750415354353:web:1cff97608ca3a3942acc50",
  measurementId: "G-CM7S2F0SNW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);