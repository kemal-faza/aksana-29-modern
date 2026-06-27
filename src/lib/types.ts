export interface Teacher {
	id: string;
	nama: string;
	jabatan: string;
	image: string;
	mapel?: string | string[];
}

export interface Student {
	id: string;
	nama: string;
	image: string;
	kelas: string;
	jabatan?: string;
}

export interface Sambutan {
	id: number;
	nama: string;
	image: string;
	isi: string;
	urutan: number;
}
