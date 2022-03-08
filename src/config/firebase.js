import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: 'photo-gallery-efbcf.appspot.com',
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
  };

// Initialize Firebase
initializeApp(firebaseConfig);