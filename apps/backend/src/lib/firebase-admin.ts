import admin from 'firebase-admin';

let db: FirebaseFirestore.Firestore | null = null;

try {
	if (!admin.apps.length) {
		const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
		if (b64) {
			const serviceAccount = JSON.parse(
				Buffer.from(b64, 'base64').toString('utf8'),
			);
			admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
		}
	}
	db = admin.firestore();
} catch (e) {
	console.warn('[firebase-admin] Init failed:', (e as Error).message);
	console.warn('[firebase-admin] /api/* will return 500 until valid FIREBASE_SERVICE_ACCOUNT_KEY is set');
}

export { db };
