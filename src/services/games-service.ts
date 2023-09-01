import { app } from '../config/firebase';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

const db = getFirestore(app);

async function gamesService() {
    
    console.log('SERVICIO GET GAME LIST')

    const querySnapshot = await getDocs(collection(db, 'game'));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}


export default { gamesService }