import { app } from '../config/firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { Region } from '../interfaces/region';

const db = getFirestore(app);

export async function getRegion() {
  try {
    const querySnapshot = await getDocs(collection(db, 'region'));
    const regionsData: Region[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        //const regionsKeys = Object.keys(data);
        const countries: Region = {
          NTSC: data.NTSC || ['NTSC vacio'],
          PAL: data.PAL || ['PAL vacio'],
          RegionFree: data.RegionFree || ['Free vacio']
        };
        regionsData.push(countries);
    });
    console.log('service',regionsData)
    return regionsData;
  } catch (error) {
      console.error('Error al obtener los region:', error);
      throw error;
  }
}
