import { app } from '../config/firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { ConsoleList } from '../interfaces/consoleList';

const db = getFirestore(app);

export async function  getConsoleListService() {

  try {
    const querySnapshot = await getDocs(collection(db, 'consoleList'));
    const consoleData: ConsoleList[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const consoleName = {
            name: data.name || ''
        };
        consoleData.push(consoleName);
    });
    console.log('service CONSOLE LIST',consoleData)
    return consoleData;
    } catch (error) {
        console.error('Error al obtener los console:', error);
        throw error;
    }
}