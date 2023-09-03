import { app } from '../config/firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { GamesCompany } from '../interfaces/game-company';

const db = getFirestore(app);

export async function getGamesCompany() {
  try {
    const querySnapshot = await getDocs(collection(db, 'gameCompany'));
    const gameCompanyData: GamesCompany[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const companyName = {
            name: data.name || ''
        };
        gameCompanyData.push(companyName);
    });
    console.log('service COMPANY GAME',gameCompanyData)
    return gameCompanyData;
} catch (error) {
    console.error('Error al obtener los company games:', error);
    throw error;
}
}