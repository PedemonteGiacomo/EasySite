// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration: follow firebase documentation when you setup your firebase project
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: ..., // this is the key relevant to your project
  authDomain: ..., // relevant to your application of your project
  databaseURL: ..., // firebase db url (depends on Timezones)
  projectId: ..., // project ID
  storageBucket: ..., // bucket of your application
  messagingSenderId: ...,
  appId: ...,
  measurementId: ..., // google analytics tag [not necessary depending of the enabling of google analytics]
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

analytics.setAnalyticsCollectionEnabled; // set the analytics collection on that tag
//(don't deserve google tag manager if you copy the ga(google-analytics) tag that firebase provide you directly from the dashboard of your project)

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export { db }; // extract the db to easily recover it when it's needed (in this case I will need this from the catchingClientComponent)

