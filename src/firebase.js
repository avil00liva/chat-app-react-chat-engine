import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAaFTVKqGafoJeS1HfcGXAO9HvnUJkwpUQ",
    authDomain: "chat-pwa-project.firebaseapp.com",
    projectId: "chat-pwa-project",
    storageBucket: "chat-pwa-project.appspot.com",
    messagingSenderId: "210240227425",
    appId: "1:210240227425:web:0e41f7b8cb2648b4a74220"
  }).auth()