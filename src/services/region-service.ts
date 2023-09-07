import { app } from '../config/firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { Region } from '../interfaces/region';

const db = getFirestore(app);

export async function getRegion() {
  try {
    const regionsData: Region = { region: [], country: [] }
     
    const querySnapshot = await getDocs(collection(db, 'region'));
    querySnapshot.forEach((doc) => {
      regionsData.region = Object.keys(doc.data()); // [ntsc, pal, free]
      regionsData.country = Object.values(doc.data()); // [[usa, jap], [es, fr, uk], [free]]
    });

    return regionsData;
  } catch (error) {
      console.error('Error al obtener los region:', error);
      throw error;
  }
}