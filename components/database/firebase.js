import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGYATMoxhNYOm0NlDH3ou-QGIU51CZz1c",
  authDomain: "dps-proyecto-1795e.firebaseapp.com",
  projectId: "dps-proyecto-1795e",
  storageBucket: "dps-proyecto-1795e.appspot.com",
  messagingSenderId: "1063259560092",
  appId: "1:1063259560092:web:b0fe4aef4130f94d217559"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const db = firebase.firestore();

export default {
  firebase,
  db
};
