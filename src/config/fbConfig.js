import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCKgpvj8LTHN1hJ1D6Db6aaAD1axWeDWGE",
authDomain: "net-ninja-marioplan-6b157.firebaseapp.com",
databaseURL: "https://net-ninja-marioplan-6b157.firebaseio.com",
projectId: "net-ninja-marioplan-6b157",
storageBucket: "net-ninja-marioplan-6b157.appspot.com",
messagingSenderId: "183133935919",
appId: "1:183133935919:web:d6b5e4f177ec258f8da9da",
measurementId: "G-X7BCQ9VR72"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Database
firebase.firestore().settings({})

export default firebase;