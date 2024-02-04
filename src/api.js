import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc, getDocs, getDoc } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAWANTkIZOL8Rrg1q5cqar27z86reb9QXE",
  authDomain: "bestbank-0224.firebaseapp.com",
  projectId: "bestbank-0224",
  storageBucket: "bestbank-0224.appspot.com",
  messagingSenderId: "346645950269",
  appId: "1:346645950269:web:e77801c1d81d0e99c2df54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const accountsCollectionRef = collection(db, "accounts")

export async function getAccounts() {
    const snapshot = await getDocs(accountsCollectionRef)
   const accounts =  snapshot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id
    }))
    return accounts
}
/**
 * 
 * Error running the method below, as database in firebase does not have id:1 field saved
 */
export async function getMainAccountDetails(accountId) {
  const snapshot = await getDoc(doc(db, "accounts", accountId))
  return {
      ...snapshot.data(),
      id: snapshot.id
  }
}
