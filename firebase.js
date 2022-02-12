// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD17i_gz3kO3F-kUIxEuD3IE0hOSlgveMM",
  authDomain: "loanapp-6263b.firebaseapp.com",
  projectId: "loanapp-6263b",
  storageBucket: "loanapp-6263b.appspot.com",
  messagingSenderId: "1630579191",
  appId: "1:1630579191:web:01ae8d6cea5936056966f2",
  measurementId: "G-Y0E08G3YEH",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, firebase };
export default db;
