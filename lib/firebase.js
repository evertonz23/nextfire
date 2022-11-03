import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  // your config
  apiKey: "AIzaSyD5TQbma6We1YLarYtTiX_5uOGNyQC_nRw",
  authDomain: "nextfire-d3960.firebaseapp.com",
  projectId: "nextfire-d3960",
  storageBucket: "nextfire-d3960.appspot.com",
  messagingSenderId: "800132093157",
  appId: "1:800132093157:web:76d97c25cf71925639300c",
  measurementId: "G-Q24CKJYMXK",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
