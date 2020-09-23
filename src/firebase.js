import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcxAGG8Hoswg1ZFZmbtMysYzLIUC9180A",
  authDomain: "facebook-clone-6684f.firebaseapp.com",
  databaseURL: "https://facebook-clone-6684f.firebaseio.com",
  projectId: "facebook-clone-6684f",
  storageBucket: "facebook-clone-6684f.appspot.com",
  messagingSenderId: "166793520908",
  appId: "1:166793520908:web:d1785e474bcc6809f94b29",
  measurementId: "G-C14YWLKC8L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider};
export default db