'use client';
import { useState } from 'react';
import { Sambutan } from '@/lib/types';
import { X } from 'react-feather';

export function SambutanModalButton({ item }: { item: Sambutan }) {
	const [open, setOpen] = useState(false);
	const paragraphs = item.isi
		.split('\n')
		.filter(Boolean)
		.map((p) => p.trim());

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="inline-block px-5 py-2 bg-tertiary text-dark font-semibold rounded-full text-sm hover:bg-tertiary/90 transition-colors">
				Baca Selengkapnya
			</button>

			{open && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
					onClick={() => setOpen(false)}>
					<div
						className="bg-dark rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 shadow-2xl border border-white/10"
						onClick={(e) => e.stopPropagation()}>
						<div className="flex items-start justify-between mb-4">
							<h3 className="text-xl font-bold text-tertiary">
								{item.nama}
							</h3>
							<button
								className="p-1 hover:bg-white/10 rounded-full transition-colors"
								onClick={() => setOpen(false)}>
								<X
									size={20}
									className="text-gray-400"
								/>
							</button>
						</div>

						<div className="space-y-3 text-sm text-gray-300 leading-relaxed text-justify">
							{paragraphs.map((p, i) => (
								<p key={i}>{p}</p>
							))}
						</div>

						<div className="mt-6 text-center">
							<button
								className="px-6 py-2 bg-tertiary/20 text-tertiary rounded-full text-sm hover:bg-tertiary/30 transition-colors"
								onClick={() => setOpen(false)}>
								Tutup
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
