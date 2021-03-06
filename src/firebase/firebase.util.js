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

    export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
        //if userAuth doesnt exist then exit from this function because this'll only work for someone thats signed in
        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRef.get()
        if(!snapShot.exists){
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }
            catch (error) {
                console.log('error creating user', error.message);
            }
        }
        return userRef;
    };

    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ promp: 'select_account'});
    //^^ this will provide that pop up which allows u to select an account to use to sign up/sign in to your account
    export const signInWithGoogle = () => auth.signInWithPopup(provider);
    // this will enable google sign in. O Auth enabled for google
    export default firebase;
