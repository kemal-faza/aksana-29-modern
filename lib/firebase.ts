import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Teacher, Student } from './types';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getStudents() {
	const querySnapshot = await getDocs(collection(db, 'students'));
	return querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	})) as Student[];
}

export async function getTeachers() {
	const querySnapshot = await getDocs(collection(db, 'teachers'));
	return querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	})) as Teacher[];
}
