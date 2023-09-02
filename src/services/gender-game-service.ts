import { app } from '../config/firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { GenderGame } from '../interfaces/gender-game';

const db = getFirestore(app);

export async function getGenderGame() {
  try {
    const querySnapshot = await getDocs(collection(db, 'genderGame'));
    const genderGameData: GenderGame[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const gender = {
            name: data.name || ''
        };
        genderGameData.push(gender);
    });
    console.log('service GENERO',genderGameData)
    return genderGameData;
} catch (error) {
    console.error('Error al obtener los gender games:', error);
    throw error;
}
}