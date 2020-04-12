import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDM5-8RUmFCkWSn-jb1-OJNuSZkK79cQV0",
    authDomain: "king-clothing-b0cea.firebaseapp.com",
    databaseURL: "https://king-clothing-b0cea.firebaseio.com",
    projectId: "king-clothing-b0cea",
    storageBucket: "king-clothing-b0cea.appspot.com",
    messagingSenderId: "371709961541",
    appId: "1:371709961541:web:9e940d9eb17f3d6ec88a2c",
    measurementId: "G-8SQGKZMNCT"
    };

    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ promp: 'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;
