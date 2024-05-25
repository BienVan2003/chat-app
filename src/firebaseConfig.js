// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDiEGTsEwawNSbeQLUV8vBHqjxPcqdGRXY",
    authDomain: "chat-app-ea00a.firebaseapp.com",
    projectId: "chat-app-ea00a",
    storageBucket: "chat-app-ea00a.appspot.com",
    messagingSenderId: "948425338678",
    appId: "1:948425338678:web:bda27ddaa9830b9d568d97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomsRef = collection(db, 'rooms');