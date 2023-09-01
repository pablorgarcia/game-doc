// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const app = initializeApp(firebaseConfig);


export default ConfigService {
  public static getFirestoreApp(){
    return getFirestore(app)
  }
}