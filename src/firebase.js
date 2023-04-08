// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeGjkFvK5eZG21GHoNTilfEdWIs2mKW8Y",
  authDomain: "realtor-clone-473bf.firebaseapp.com",
  projectId: "realtor-clone-473bf",
  storageBucket: "realtor-clone-473bf.appspot.com",
  messagingSenderId: "782881979301",
  appId: "1:782881979301:web:704cecb771897e8bf4864c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();