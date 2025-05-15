// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSVfLHP6P89sn5fJoFw9efhbxoUZPZga4",
  authDomain: "fakecart-b6b2c.firebaseapp.com",
  projectId: "fakecart-b6b2c",
  storageBucket: "fakecart-b6b2c.appspot.com",
  messagingSenderId: "606097571348",
  appId: "1:606097571348:web:ed27687b1121eb97cb3101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth };