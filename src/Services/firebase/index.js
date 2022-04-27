import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk1DZ-6_z03xDgk-f_uRAp7U3QLkDf52U",
  authDomain: "lubricentrowere-3e7b4.firebaseapp.com",
  projectId: "lubricentrowere-3e7b4",
  storageBucket: "lubricentrowere-3e7b4.appspot.com",
  messagingSenderId: "336039522487",
  appId: "1:336039522487:web:ad2bf5a6ff36a7ce9fdd32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 

// con esta funcion voy a obtener la referencia a nuestra bd