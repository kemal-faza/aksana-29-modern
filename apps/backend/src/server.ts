import './env';
import express from 'express';
import cors from 'cors';
import teachersRouter from './routes/teachers.js';
import studentsRouter from './routes/students.js';

if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
	console.error('FIREBASE_SERVICE_ACCOUNT_KEY not set');
	process.exit(1);
}

const PORT = process.env.PORT ?? 4000;
const ORIGIN = process.env.CORS_ORIGIN ?? '*';

const app = express();
app.use(cors({ origin: ORIGIN.split(',') }));
app.use(express.json());

app.get('/health', (_req, res) =>
	res.json({ ok: true, timestamp: Date.now() }),
);

app.use('/api', teachersRouter);
app.use('/api', studentsRouter);

app.listen(PORT, () => {
	console.log(`Aksana Backend running on :${PORT}`);
});
