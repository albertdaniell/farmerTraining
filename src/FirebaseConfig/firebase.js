import firebase from 'firebase/app';
import 'firebase/messaging';   // for cloud messaging


var firebaseConfig = {
    apiKey: "AIzaSyCjmdkPm-ASOmWSVr-l_GLfH4J-ErL9bYM",
    authDomain: "kalro-crops2.firebaseapp.com",
    databaseURL: "https://kalro-crops2.firebaseio.com",
    projectId: "kalro-crops2",
    storageBucket: "kalro-crops2.appspot.com",
    messagingSenderId: "953896520288",
    appId: "1:953896520288:web:25b9321c768e5e96905105",
    measurementId: "G-G9WW86K8WC"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
export default firebase