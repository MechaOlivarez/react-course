
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection, getDocs, Timestamp, query, where} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAxk1sT0f07L-MPB9pL7po_qOcNgsFXgnQ",
    authDomain: "react-proyecto-c28c2.firebaseapp.com",
    projectId: "react-proyecto-c28c2",
    storageBucket: "react-proyecto-c28c2.appspot.com",
    messagingSenderId: "753283673957",
    appId: "1:753283673957:web:83f80f766c966032e8bb8c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export async function getAllCandles() {
    const miCollection = collection(db, "productos");
    const candles = await getDocs(miCollection);

    return  candles.docs.map(candle => candle.data()) 

}

export async function getCandlesbyCategory(categoriacolor) {
    const miCollection = collection(db, "productos");
    const myQuery = query (miCollection, where("color", "==", categoriacolor))
    const candles = await getDocs(myQuery);

    return  candles.docs.map(candle => candle.data()) 
}

export async function getCandle(id) {
    const miCollection = collection(db, "productos"); 
    const myQuery = query (miCollection, where("id", "==", id))
    
    const resultDoc = await getDocs(myQuery);
    return resultDoc.docs[0].data()

}

export async function sendBuyOrder(order) {
    const date = Timestamp.now();
    const orderWithDate = {...order, timestamp:date}

    const myCollection = collection(db, "orders");
    const orderDoc = await addDoc(myCollection, orderWithDate);
    return (orderDoc.id)
}

export async function sendForm(form) {
   
    const myForms = collection(db, "Forms");
    const formDoc = await addDoc(myForms,form);
    return (formDoc) 
}
