
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCH-bQzmEzLGj_WofcLn6FSFBIkTPsR8U",
  authDomain: "todoapp-414f4.firebaseapp.com",
  projectId: "todoapp-414f4",
  storageBucket: "todoapp-414f4.appspot.com",
  messagingSenderId: "111705623291",
  appId: "1:111705623291:web:7ab989262d0defe133be5e"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider=new GoogleAuthProvider();
export const auth=getAuth(app);