import { Router } from 'express';
import { db } from '../lib/firebase-admin.js';

const router = Router();

router.get('/teachers', async (_req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ error: 'Firebase not initialized' });
    }
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
