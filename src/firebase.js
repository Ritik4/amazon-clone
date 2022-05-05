import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW0Wsarz8yzPZaBX5tfSz72GnDgywm5YE",
  authDomain: "clone-23069.firebaseapp.com",
  projectId: "clone-23069",
  storageBucket: "clone-23069.appspot.com",
  messagingSenderId: "1096027425548",
  appId: "1:1096027425548:web:3eb9beff4dbcd80eb11729",
  measurementId: "G-Y0F7X7M1JH",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
