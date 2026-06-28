import type { Student, Teacher } from '@aksana/shared';

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export async function getTeachers(): Promise<Teacher[]> {
	const res = await fetch(`${BASE}/teachers`, { cache: 'force-cache' });
	if (!res.ok) throw new Error('Failed to fetch teachers');
	return res.json();
}
export async function getStudents(kelas?: string): Promise<Student[]> {
	const params = kelas ? `?kelas=${encodeURIComponent(kelas)}` : '';
	const res = await fetch(`${BASE}/students${params}`, {
		cache: 'force-cache',
	});
	if (!res.ok) throw new Error('Failed to fetch students');
	return res.json();
}
