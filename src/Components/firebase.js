import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBj2kqkR_fEeSFsNnSdd1Yf1FEhiIFcRlQ",
  authDomain: "projects-comments.firebaseapp.com",
  projectId: "projects-comments",
  storageBucket: "projects-comments.appspot.com",
  messagingSenderId: "271181235678",
  appId: "1:271181235678:web:11908ae27a0a3ea659894f",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
