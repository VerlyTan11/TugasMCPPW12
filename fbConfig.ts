// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD86UgKUNT_xNon1YxJBofBHqj5Xn21PyE",
  authDomain: "maplabuts-e1d10.firebaseapp.com",
  projectId: "maplabuts-e1d10",
  storageBucket: "maplabuts-e1d10.appspot.com",
  messagingSenderId: "398426551838",
  appId: "1:398426551838:web:f0fac0b3932a870f32200f",
  measurementId: "G-DGJ8Q3DQ3F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(app);

export const storage = getStorage(app);