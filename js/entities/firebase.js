import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyCs84Cq_-pK4oJyXTJM6LGowNx3AZ1cy1Q",
  authDomain: "omocatusers.firebaseapp.com",
  projectId: "omocatusers",
  storageBucket: "omocatusers.firebasestorage.app",
  messagingSenderId: "419928823272",
  appId: "1:419928823272:web:a1e13aaef2cda5e1adc05d",
  measurementId: "G-3EH4CGSK33"
};

let app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
export let db = getFirestore(app);

export async function registerUser(email, password, firstName, lastName) {
  let cred = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", cred.user.uid), { firstName, lastName, email });
  return cred.user;
}

export async function loginUser(email, password) {
  let cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logoutUser() {
  await signOut(auth);
}

export async function getUserData(uid) {
  let snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

export { onAuthStateChanged };
