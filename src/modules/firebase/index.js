import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDdbup3HIex3dE9phf5-EUMDKHj_FUlL-k',
	authDomain: 'testaccess-web.firebaseapp.com',
	projectId: 'testaccess-web',
	storageBucket: 'testaccess-web.appspot.com',
	messagingSenderId: '549900795374',
	appId: '1:549900795374:web:6153ff273a08cf236422ff',
	measurementId: 'G-G8E8H54TK6',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const feedbackCollection = collection(db, 'feedback');

export const addFeedback = async (feedback) => {
	const docRef = await addDoc(feedbackCollection, feedback);

	return docRef.id;
};
