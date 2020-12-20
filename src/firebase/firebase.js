import firebase from 'firebase/app';
import 'firebase/auth'; 
const app = firebase.initializeApp({
    apiKey: "AIzaSyAA8IVw8OYUzoH9vIo1fYxlq7kbBhDs67g",
    authDomain: "radhesh-e4c7d.firebaseapp.com",
    databaseURL: "https://radhesh-e4c7d-default-rtdb.firebaseio.com",
    projectId: "radhesh-e4c7d",
    storageBucket: "radhesh-e4c7d.appspot.com",
    messagingSenderId: "63288981974",
    appId: "1:63288981974:web:ab3837e90cb2635ad70c77",
    measurementId: "G-8PR6QFC38X"
})
export const auth = app.auth()
export default app
