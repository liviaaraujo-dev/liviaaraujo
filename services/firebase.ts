import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBYPipwSqwwEsufq4qEvdAfDpdGVCtpa9Y",
  authDomain: "blog-tech-4e886.firebaseapp.com",
  projectId: "blog-tech-4e886",
  storageBucket: "blog-tech-4e886.appspot.com",
  messagingSenderId: "266202616126",
  appId: "1:266202616126:web:494ba21984126484cd1c6f",
  measurementId: "G-D7T6WLPC6J"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase();
