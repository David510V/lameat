import firebase from 'firebase'
import '@firebase/firestore/dist/index.cjs.js';
import dotenv from 'dotenv'
dotenv.config()
var firebaseConfig = {
    apiKey: process.env.VUE_APP_API,
    authDomain: process.env.VUE_APP_FireBase_AuthDomain,
    databaseURL: process.env.VUE_APP_FireBase_DatabaseURL,
    projectId: "lameat-e8c78",
    storageBucket: process.env.VUE_APP_FireBase_StorageBucket,
    messagingSenderId: process.env.VUE_APP_FireBase_MessagingSenderID,
    appId: process.env.VUE_APP_FireBase_AppID,
    measurementId: process.env.VUE_APP_FireBase_MeasurementId
  };
  // Initialize Firebase
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const FireStore =firebaseapp.firestore()

  FireStore.settings({timestampsInSnapshots:true})

  export default FireStore