import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCe8x9vONK9y5IrQ3pk6TlFVet0XIxxvfM",
  authDomain: "tiktok-clone-4859c.firebaseapp.com",
  databaseURL: "https://tiktok-clone-4859c.firebaseio.com",
  projectId: "tiktok-clone-4859c",
  storageBucket: "tiktok-clone-4859c.appspot.com",
  messagingSenderId: "848049132853",
  appId: "1:848049132853:web:4a275df6ea1d6b6c49687c",
  measurementId: "G-SP0LT0KMEZ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
