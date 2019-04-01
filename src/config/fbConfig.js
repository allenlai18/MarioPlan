import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAqHzItAcMTP-1G3QTuPxm7EKnaN0m1DQg",
    authDomain: "marioplan-53551.firebaseapp.com",
    databaseURL: "https://marioplan-53551.firebaseio.com",
    projectId: "marioplan-53551",
    storageBucket: "marioplan-53551.appspot.com",
    messagingSenderId: "729536497749"
};
firebase.initializeApp(config);

// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;