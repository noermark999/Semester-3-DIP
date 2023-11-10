import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  addDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBL1l2RUZ2HdXORHk2b64pdC4HGe7D4sro",
  authDomain: "cars-af3e5.firebaseapp.com",
  projectId: "cars-af3e5",
  storageBucket: "cars-af3e5.appspot.com",
  messagingSenderId: "923971892475",
  appId: "1:923971892475:web:51ef8dc7821bf6c2d8ac5e"
}

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

export default { getCars, getCar, deleteCar }