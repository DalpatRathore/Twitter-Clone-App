import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
