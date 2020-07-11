import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyATxHDtl4bT3ATO6k_xa0GVpSaXiG6fZv4",
    authDomain: "simon-plan.firebaseapp.com",
    databaseURL: "https://simon-plan.firebaseio.com",
    projectId: "simon-plan",
    storageBucket: "simon-plan.appspot.com",
    messagingSenderId: "434481228593",
    appId: "1:434481228593:web:6798cbdb5d2e8ab4da9e10",
    measurementId: "G-V7G6SKTK24"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;