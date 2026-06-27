'use client';
import Image from 'next/image';
import { Sambutan } from '@/lib/types';
import { SambutanModalButton } from './SambutanModalButton';

export function SambutanCard({ item }: { item: Sambutan }) {
	const excerpt = item.isi.split('\n').filter(Boolean).slice(0, 3).join(' ');

	return (
		<div className="bg-dark border border-white/5 rounded-2xl p-6 h-full flex flex-col shadow-xl mb-10">
			<div className="flex justify-center mb-4">
				<div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-tertiary/30 ring-2 ring-tertiary/10">
					<Image
						src={item.image}
						alt={item.nama}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 96px, 112px"
					/>
				</div>
			</div>

			<h3 className="text-lg font-bold text-center text-tertiary">
				{item.nama}
			</h3>

			<div className="flex-1">
				<p className="text-sm text-gray-300 leading-relaxed line-clamp-3 text-justify">
					{excerpt}
				</p>
			</div>

			<div className="mt-4 text-center">
				<SambutanModalButton item={item} />
			</div>
		</div>
	);
}
