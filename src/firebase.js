import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBX4SUbx9nVuXBYBcR-IInLFf2cbj9Zm-k",
    authDomain: "zroot-cloud.firebaseapp.com",
    databaseURL: "https://zroot-cloud.firebaseio.com",
    projectId: "zroot-cloud",
    storageBucket: "zroot-cloud.appspot.com",
    messagingSenderId: "40246630590",
    appId: "1:40246630590:web:cedcb9c62cecccd8"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();


export const db = firebase.firestore();