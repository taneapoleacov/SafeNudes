import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAlHsU0RMK7-GwdJBf-DcjTrtXr5J9yYfE',
  authDomain: 'fir-chat-bcc59.firebaseapp.com',
  databaseURL: 'https://fir-chat-bcc59.firebaseio.com',
  projectId: 'fir-chat-bcc59',
  storageBucket: 'fir-chat-bcc59.appspot.com',
  messagingSenderId: '277886617690',
  appId: '1:277886617690:web:1e1a81fbb77a1be32cb063',
  // Initialize Firebase
};
const Firebase = firebase.initializeApp(config);
export default Firebase;
