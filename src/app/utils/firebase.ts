import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ0Hg-P9FJnLwx33yDHM1wbcfYq3XtB-c",
  authDomain: "seaventures-e9389.firebaseapp.com",
  projectId: "seaventures-e9389",
  storageBucket: "seaventures-e9389.firebasestorage.app",
  messagingSenderId: "983668140209",
  appId: "1:983668140209:web:3c20d4243ce27e4f6c9a90",
  measurementId: "G-R5VFSCP8DG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Analytics if supported (only in browser)
export let analytics: ReturnType<typeof getAnalytics> | undefined = undefined;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export async function getIdToken() {
  const user = auth.currentUser;
  if (!user) throw new Error("You are not logged in. Please log in.");
  return await user.getIdToken();
}