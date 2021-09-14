import firebase from 'firebase/app'
import 'firebase/firestore'

import { ref, onUnmounted } from 'vue'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCVXIm2rqoHbVhT8kGjqx2yfy6Xi6dN3-Q",
  authDomain: "twitterclone-8ade8.firebaseapp.com",
  projectId: "twitterclone-8ade8",
  storageBucket: "twitterclone-8ade8.appspot.com",
  messagingSenderId: "675395236632",
  appId: "1:675395236632:web:bb49a1d0d7df4b8f8f246d",
  measurementId: "G-GG2T0H6LH3"
});

const db = firebaseApp.firestore()
export default db
