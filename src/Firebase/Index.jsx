import firebase from 'firebase/app';
import "@firebase/firestore";

  const app = firebase.initializeApp ({
    apiKey: "AIzaSyAu4Z0iiynhasnRf26MCwhkb32YHJqQnaA",
    authDomain: "react-murua.firebaseapp.com",
    projectId: "react-murua",
    storageBucket: "react-murua.appspot.com",
    messagingSenderId: "955245030397",
    appId: "1:955245030397:web:ff6f5963a6de753b1ac794",
    measurementId: "G-WTFN1H9P5Q"
  });
 
  
  export const getFirebase = () => {
      return app;
    }
    
  export const getFirestore = () => {
      //firebase.analytics(app);
      return firebase.firestore(app);
    }