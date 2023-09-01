import { app } from '../config/firebase';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { Game } from '../interfaces/game';

const db = getFirestore(app);


export async function getGamesService() {
    try {
        const querySnapshot = await getDocs(collection(db, 'game'));
        const games: Game[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const game = {
                name: data.name || '',
                image: data.image || '',
                companyid: data.companyid || '',
                consoleid: data.consoleid || '',
                amount: data.amount || 0,
                description: data.description || '',
                gendergameid: data.gendergameid || '',
                regiongameid: data.regiongameid || '',
                isfavorite: data.isfavorite || false,
                ishack: data.ishack || false,
                isphysical: data.ishack || false,
                twoplayers: data.ishack || false
            };
            games.push(game);
        });
        console.log(games)
        return games;
    } catch (error) {
        console.error('Error al obtener los games:', error);
        throw error;
    }
}
