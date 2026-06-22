'use client';

import { useState } from 'react';

interface LazyVideoProps {
	src: string;
	title: string;
}

export function LazyVideo({ src, title }: LazyVideoProps) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="relative w-full aspect-video overflow-hidden rounded-md shadow-lg bg-dark/50">
			{isActive ? (
				<iframe
					src={src}
					title={title}
					loading="lazy"
					allow="autoplay; fullscreen"
					allowFullScreen
					className="absolute inset-0 h-full w-full"></iframe>
			) : (
				<button
					type="button"
					className="absolute inset-0 flex h-full w-full items-center justify-center bg-dark/60 text-secondary text-lg font-semibold"
					aria-label={`Play ${title}`}
					onClick={() => setIsActive(true)}>
					Play {title}
				</button>
			)}
		</div>
	);
}
