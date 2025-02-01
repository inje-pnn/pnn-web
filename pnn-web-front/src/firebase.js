import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDh3D7B5tpXYwC5t2KjAc1LPLkUppAt0-Y",
  authDomain: "pnn-web-4bad4.firebaseapp.com",
  projectId: "pnn-web-4bad4",
  storageBucket: "pnn-web-4bad4.appspot.com",
  appId: "1:961986237709:web:a1dd841e35a7a340700c44",
  measurementId: "G-XF6SJJXFX8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export { app };
