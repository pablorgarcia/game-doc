import { app } from '../config/firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { Region } from '../interfaces/region';

const db = getFirestore(app);

export async function getRegion() {
  try {
    const querySnapshot = await getDocs(collection(db, 'region'));
    const regionData: Region[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const regions: Region = {
          NTSC: data.NTSC || [],
          PAL: data.PAL || [],
          Regionfree: data.Regionfree || []
        };
        regionData.push(regions);
    });
    console.log('service REGION',regionData)
    return regionData;
} catch (error) {
    console.error('Error al obtener los region:', error);
    throw error;
}
}