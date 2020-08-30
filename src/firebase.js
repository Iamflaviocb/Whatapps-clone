import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB4mkZjiELod59t__fW73IS6oAy-jesyuU",
  authDomain: "whatapps-clone.firebaseapp.com",
  databaseURL: "https://whatapps-clone.firebaseio.com",
  projectId: "whatapps-clone",
  storageBucket: "whatapps-clone.appspot.com",
  messagingSenderId: "160801253672",
  appId: "1:160801253672:web:902b2c08496271dea7881d",
  measurementId: "G-81N3SP7R35",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
