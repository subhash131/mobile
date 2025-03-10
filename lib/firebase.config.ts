import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDmf__DBYNQHUnBMNc7yIKdC4TJJsNrLvY",
  authDomain: "localhost",
  projectId: "fitx-sub",
  // storageBucket: "YOUR_STORAGE_BUCKET",
  // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:462368902473:android:26cf058fed2f1aef0fde98",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
