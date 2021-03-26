import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZS2rzvxUjfG3xX999Ndjum-MMhZAdd2k",
  authDomain: "newssite-bde83.firebaseapp.com",
  projectId: "newssite-bde83",
  storageBucket: "newssite-bde83.appspot.com",
  messagingSenderId: "413055958323",
  appId: "1:413055958323:web:188e5758e982a23bd69246",
  measurementId: "G-3VN0D3TNTW",
};

fireDb = firebase.initializeApp(firebaseConfig);

//firebase.analytics();

export default fireDb.database().ref();
