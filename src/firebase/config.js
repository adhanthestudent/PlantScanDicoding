// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdDyNFAE8A7Xix72ZGwL_Sqif-N1sDEBA",
  authDomain: "plant-e82c0.firebaseapp.com",
  projectId: "plant-e82c0",
  appId: "plant-e82c0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
