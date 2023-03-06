import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBrzidieScIgjeOglkXHxs4KIHDGEBiU6U",
    authDomain: "linkedin-clone-bc277.firebaseapp.com",
    projectId: "linkedin-clone-bc277",
    storageBucket: "linkedin-clone-bc277.appspot.com",
    messagingSenderId: "1093398480463",
    appId: "1:1093398480463:web:f6e45c8217de22d2d9cc3a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db  =firebaseApp.firestore();
  const auth = firebaseApp.auth();
 
  export {auth};
  export default db;