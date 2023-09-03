import { app } from '../config/firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { Gender } from '../interfaces/gender';

const db = getFirestore(app);

export async function getGender() {
  try {
    const querySnapshot = await getDocs(collection(db, 'gender'));
    const genderData: Gender[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const genderName = {
            name: data.name || ''
        };
        genderData.push(genderName);
    });
    console.log('service GENDER', genderData)
    return genderData;
} catch (error) {
    console.error('Error al obtener GENEROS:', error);
    throw error;
}
}