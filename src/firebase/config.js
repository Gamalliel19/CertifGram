import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCpB52I5l8GWUgHav_aa2WrN2gyW96UHpU",
    authDomain: "sertifigram.firebaseapp.com",
    databaseURL: "https://sertifigram.firebaseio.com",
    projectId: "sertifigram",
    storageBucket: "sertifigram.appspot.com",
    messagingSenderId: "815517349784",
    appId: "1:815517349784:web:7c28687a9c295f7ed25ded"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timeStamp };