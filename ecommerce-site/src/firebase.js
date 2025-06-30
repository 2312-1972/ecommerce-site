import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCoW40ig5UKwe1IkPWgbPvkXw3Boxs_A9E",
  authDomain: "carbonshop-34.firebaseapp.com",
  projectId: "carbonshop-34",
  storageBucket: "carbonshop-34.firebasestorage.app",
  messagingSenderId: "1016596318154",
  appId: "1:1016596318154:web:80582aca616c5ebc593133",
  measurementId: "G-B74YZ62VRN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app);