import { Router } from 'express';
import { db } from 'src/lib/firebase-admin';

const router = Router();

router.get('/teachers', async (_req, res) => {
	try {
		const snap = await db.collection('teachers').get();
		const teachers = snap.docs.map((d) => ({ id: d.id, ...d.data() }));

		res.json(teachers);
	} catch (e) {
		res.status(500).json({
			error: 'Failed to fetch teachers',
			message: String(e),
		});
	}
});

export default router;
