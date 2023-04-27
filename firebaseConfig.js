import "firebase/compat/database";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getFireStore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyAp8_HwLtdbUOG6oLOuNKJ2VqSHHNl97TY",
  authDomain: "mystock-da022.firebaseapp.com",
  projectId: "mystock-da022",
  storageBucket: "mystock-da022.appspot.com",
  messagingSenderId: "456346906371",
  appId: "1:456346906371:web:4766ff579782679d0e4336",
  measurementId: "G-MSEBG8BXB6",
  databaseURL:
    "https://mystock-da022-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// if (!firebase.apps.length) {
export const app = initializeApp(firebaseConfig);
// }
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// export const firebase_db = firebase.database();
export const db = getFirestore();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
