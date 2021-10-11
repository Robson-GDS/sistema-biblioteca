import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyDhpudU5-rb6US4ZPJjkdjOpVhkCGtvDLA",
  authDomain: "biblioteca-528d7.firebaseapp.com",
  projectId: "biblioteca-528d7",
  storageBucket: "biblioteca-528d7.appspot.com",
  messagingSenderId: "99323038999",
  appId: "1:99323038999:web:ab37ef7500966afc487b52",
  measurementId: "G-2HR7WEEY25"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;