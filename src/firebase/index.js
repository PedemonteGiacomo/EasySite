// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration: follow firebase documentation when you setup your firebase project
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIoLD4ZGR4Juz2MGxxUraiuX9uG2E7Mx4",
  authDomain: "itl-impresadipulizie-genova.firebaseapp.com",
  databaseURL: "https://itl-impresadipulizie-genova-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "itl-impresadipulizie-genova",
  storageBucket: "itl-impresadipulizie-genova.firebasestorage.app",
  messagingSenderId: "56740144444",
  appId: "1:56740144444:web:674e54652a3471d898aa39",
  measurementId: "G-ZE492RNM0C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// NOTA: Google Analytics ora è gestito tramite Google Tag Manager (GTM-M564JXHL)
// Commentato per evitare double tracking
// const analytics = firebase.analytics();
// analytics.setAnalyticsCollectionEnabled(true);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export { db }; // extract the db to easily recover it when it's needed (in this case I will need this from the catchingClientComponent)

