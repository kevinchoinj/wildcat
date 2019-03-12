import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'Firebase Info',
  authDomain: 'Firebase Info',
  databaseURL: 'Firebase Info',
  projectId: 'Firebase Info',
  storageBucket: 'Firebase Info',
  messagingSenderId: 'Firebase Info'
};

var fire = firebase.initializeApp(config);
export default fire;
