import { promises as fs } from 'fs';
import { Sambutan } from '@/lib/types';
import path from 'path';
import { SambutanCarousel } from './SambutanCarousel';

async function getSambutan(): Promise<Sambutan[]> {
	try {
		const filePath = path.join(
			process.cwd(),
			'public',
			'data',
			'sambutan.json',
		);
		const contents = await fs.readFile(filePath, 'utf-8');
		return JSON.parse(contents);
	} catch {
		return [];
	}
}

export async function SambutanSection() {
	const data = await getSambutan();

	if (data.length === 0) return null;

	return (
		<section
			id="sambutan"
			className="py-16 bg-dark text-secondary">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl lg:text-4xl font-bold font-bebas tracking-wider uppercase text-tertiary text-center">
					Sambutan
				</h2>
				<div className="w-20 h-1 bg-tertiary mx-auto mt-3 rounded-full" />
			</div>

			<div className="max-w-4xl mx-auto mt-10 px-4">
				<SambutanCarousel data={data} />
			</div>
		</section>
	);
}
