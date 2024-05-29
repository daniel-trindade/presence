import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMnOWlWRedWhiPNBTQs-0ofVmSsf3ojzk",
  authDomain: "presence-39de3.firebaseapp.com",
  databaseURL: "https://presence-39de3-default-rtdb.firebaseio.com",
  projectId: "presence-39de3",
  storageBucket: "presence-39de3.appspot.com",
  messagingSenderId: "554629392594",
  appId: "1:554629392594:web:ac442b20fbf37dbe28e50b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);