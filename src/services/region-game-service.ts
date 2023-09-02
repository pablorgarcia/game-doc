import { app } from '../config/firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { RegionGame } from '../interfaces/region-game';

const db = getFirestore(app);

export async function getRegionGame() {
  try {
    const querySnapshot = await getDocs(collection(db, 'regionGame'));
    const regionGameData: RegionGame[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const region = {
          region: {
            NTSC: data.NTSC || '',
            PAL: data.PAL || ''
          }
        };
        regionGameData.push(region);
    });
    console.log('service REGION GAME',regionGameData)
    return regionGameData;
} catch (error) {
    console.error('Error al obtener los region game:', error);
    throw error;
}
}