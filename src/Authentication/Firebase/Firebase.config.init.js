
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAau1cpia7Y3ZgUxA3GeYkPwZ8qHjM_WjU",
    authDomain: "job-world-263f2.firebaseapp.com",
    projectId: "job-world-263f2",
    storageBucket: "job-world-263f2.appspot.com",
    messagingSenderId: "237186612485",
    appId: "1:237186612485:web:0143b657c232e5456ecb6c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
