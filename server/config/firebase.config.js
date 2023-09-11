const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;

const firebaseConfig = {
  apiKey: "AIzaSyBssViWIWciYda5WSd_dOq9bSNrPOYGM-M",
  authDomain: "project-musicapp-c9bfc.firebaseapp.com",
  projectId: "project-musicapp-c9bfc",
  storageBucket: "project-musicapp-c9bfc.appspot.com",
  messagingSenderId: "935054122545",
  appId: "1:935054122545:web:701a261568c4a4064cff10"
};

