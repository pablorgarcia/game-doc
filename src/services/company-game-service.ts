import { app } from '../config/firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { CompanyGames } from '../interfaces/company-game';

const db = getFirestore(app);

export async function getCompanyGame() {
  try {
    const querySnapshot = await getDocs(collection(db, 'companyGame'));
    const companyGameData: CompanyGames[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const company = {
            name: data.name || ''
        };
        companyGameData.push(company);
    });
    console.log('service COMPANY GAME',companyGameData)
    return companyGameData;
} catch (error) {
    console.error('Error al obtener los company games:', error);
    throw error;
}
}