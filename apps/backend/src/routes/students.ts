import { Router } from 'express';
import { db } from '../lib/firebase-admin.js';

const router = Router();

router.get('/students', async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ error: 'Firebase not initialized' });
    }
    const query = req.query.kelas
      ? db.collection('students').where('kelas', '==', req.query.kelas)
      : db.collection('students');
    const snap = await query.get();
    const students = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    students.sort(
      (a, b) => (a as any).nama?.localeCompare?.(b as any).nama ?? 0,
    );
    res.json(students);
  } catch (e) {
    res.status(500).json({
      error: 'Failed to fetch students',
      message: String(e),
    });
  }
});

export default router;
