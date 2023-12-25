import {getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcZ4qSKo2B4UyGA6zU1w5Ab0zYQyONi0M",
  authDomain: "ai-chatbot-44a1b.firebaseapp.com",
  projectId: "ai-chatbot-44a1b",
  storageBucket: "ai-chatbot-44a1b.appspot.com",
  messagingSenderId: "47262304256",
  appId: "1:47262304256:web:f9f3a34a2879835ac8b0e5"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};