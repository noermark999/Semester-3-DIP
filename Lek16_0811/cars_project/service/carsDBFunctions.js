import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  addDoc,
  updateDoc
} from 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyDIqWNgglY77aaU-UJdezHTLJewuKqN14M",

  authDomain: "lek16-60e87.firebaseapp.com",

  projectId: "lek16-60e87",

  storageBucket: "lek16-60e87.appspot.com",

  messagingSenderId: "750539290816",

  appId: "1:750539290816:web:016a9f9132d78dc79c1525",

  measurementId: "G-3R651450Q8"

};


const firebase_app = initializeApp(firebaseConfig)
const db = getFirestore(firebase_app)
const carsCollection = collection(db, 'cars')

const getCars = async () => {
  let carsQueryDocs = await getDocs(carsCollection)
  let cars = carsQueryDocs.docs.map(doc => {
    let data = doc.data()
    data.docID = doc.id
    return data
  })
  return cars
}

const getCar = async (id) => {
  const docRef = doc(db, 'cars', id)
  const carQueryDoc = await getDoc(docRef)
  let car = carQueryDoc.data()
  car.docID = carQueryDoc.id
  return car
}

const deleteCar = async (id) => {
  console.log('vi deleter nu rigtigt')
  const deletedCar = await deleteDoc(doc(db, 'cars', id))
}

const addCar = async (brand, model) => {
  const car = {brand: brand, model: model}
  const docRef = await addDoc(carsCollection, car);
  return docRef.id;
}

const editCar = async (car) => {
  const docRef = doc(db, 'cars', car.carID)
  await updateDoc(docRef, {
    brand: car.brand,
    model: car.model
  })

 
} 

export default { getCars, getCar, deleteCar, addCar, editCar }