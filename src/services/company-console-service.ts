import { app } from '../config/firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { CompanyConsole } from '../interfaces/company-console';


const db = getFirestore(app);

export async function getCompanyConsole() {
  try {
    const querySnapshot = await getDocs(collection(db, 'companyConsole'));
    const companyConsoleData: CompanyConsole[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const company = {
            name: data.name || ''
        };
        companyConsoleData.push(company);
    });
    console.log('service COMPANY CONSOLE',companyConsoleData)
    return companyConsoleData;
} catch (error) {
    console.error('Error al obtener los company console:', error);
    throw error;
}
}