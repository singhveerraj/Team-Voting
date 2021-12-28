import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyCIItlezfD2QmzqpfQb10twxsMB8W1Z_MI",
  authDomain: "teamvotingapp-f9091.firebaseapp.com",
  databaseURL: "https://teamvotingapp-f9091-default-rtdb.firebaseio.com",
  projectId: "teamvotingapp-f9091",
  storageBucket: "teamvotingapp-f9091.appspot.com",
  messagingSenderId: "507303973949",
  appId: "1:507303973949:web:bdf5cc23de611b0a300654"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
