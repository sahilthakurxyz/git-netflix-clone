import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACht6Gg8Puewyp7LXNuD4u7AQPGc4Ve1w",
  authDomain: "login-authentication-4e1fb.firebaseapp.com",
  projectId: "login-authentication-4e1fb",
  storageBucket: "login-authentication-4e1fb.appspot.com",
  messagingSenderId: "363813459818",
  appId: "1:363813459818:web:2cf876a763baa1be003713",
  measurementId: "G-Q23WFH4H8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
