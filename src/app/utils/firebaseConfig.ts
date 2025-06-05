import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvjejCavLpfBjmb9El3Cdh4GsXlEq1sIk",
  authDomain: "seaventure-e4ddc.firebaseapp.com",
  projectId: "seaventure-e4ddc",
  appId: "1:439411967957:web:39a3977008aad158239f5c",
  // ...other config values from your Firebase project
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);