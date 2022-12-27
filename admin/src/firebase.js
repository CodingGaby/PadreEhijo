// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_YN0GQ2W8r-X3YaRgYFVugchGdYbj1wo",
  authDomain: "shop-e92d5.firebaseapp.com",
  projectId: "shop-e92d5",
  storageBucket: "shop-e92d5.appspot.com",
  messagingSenderId: "475990001186",
  appId: "1:475990001186:web:a968ae413f786394a92c7b",
  measurementId: "G-D6EB6GEYV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;