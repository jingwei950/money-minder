// Import firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD00gJ_-cSfC4Q_qaDqNaVsXVdHhvawj5A",
  authDomain: "money-minder-e6b85.firebaseapp.com",
  projectId: "money-minder-e6b85",
  storageBucket: "money-minder-e6b85.appspot.com",
  messagingSenderId: "759267075411",
  appId: "1:759267075411:web:fa77978290b074a61c6da6",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig); //Connects to firebase database and set everything up
const db = firebaseApp.firestore(); //Get the firestore (database)
const auth = firebase.auth(); //Get the authentication

export { db, auth };
