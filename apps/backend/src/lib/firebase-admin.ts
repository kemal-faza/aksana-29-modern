import admin from 'firebase-admin';
if (!admin.apps.length) {
	const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
	if (!b64) throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY missing');

	const serviceAccount = JSON.parse(
		Buffer.from(b64, 'base64').toString('utf8'),
	);
	admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

export const db = admin.firestore();
