
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAA3HAzQIEu3ZhMPSH_y6stZpYCuO5xekg",
    authDomain: "sprint-shopping-mall.firebaseapp.com",
    projectId: "sprint-shopping-mall",
    storageBucket: "sprint-shopping-mall.appspot.com",
    messagingSenderId: "1063906582335",
    appId: "1:1063906582335:web:ad71c4bee3a0de6f0ebd8a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProduct() {
    const ref = collection(db, 'product');
    const snapshot = await getDocs(ref);
    const list = snapshot.docs.map(doc =>
        doc.data()
    );
    return list;
}