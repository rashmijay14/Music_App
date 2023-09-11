import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
//    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
//    appId: process.env.REACT_APP_FIREBASE_APPI_ID,
//  };

 const firebaseConfig = {
  apiKey: "AIzaSyBssViWIWciYda5WSd_dOq9bSNrPOYGM-M",
  authDomain: "project-musicapp-c9bfc.firebaseapp.com",
  projectId: "project-musicapp-c9bfc",
  storageBucket: "project-musicapp-c9bfc.appspot.com",
  messagingSenderId: "935054122545",
  appId: "1:935054122545:web:701a261568c4a4064cff10"
}
 



const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
