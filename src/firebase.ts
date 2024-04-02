// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6JCjj3VQShVva2v5QSx2qHuycYcwGM5E",
  authDomain: "goodeat-diary.firebaseapp.com",
  projectId: "goodeat-diary",
  storageBucket: "goodeat-diary.appspot.com",
  messagingSenderId: "611871250785",
  appId: "1:611871250785:web:7099059260a8cb11c10d20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
