import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD8k7z8Hy1FiwNaeighW5Vcmiw0Ughru4w",
    authDomain: "toyshop-3befd.firebaseapp.com",
    databaseURL: "https://toyshop-3befd.firebaseio.com",
    projectId: "toyshop-3befd",
    storageBucket: "toyshop-3befd.appspot.com",
    messagingSenderId: "282670537844",
    appId: "1:282670537844:web:cdff15c7fd695efcc40521"
  }
firebase.initializeApp(config);
export const auth = firebase.auth()
export const firestore= firebase.firestore()

const provider= new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:"select_account"})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)
export default firebase;