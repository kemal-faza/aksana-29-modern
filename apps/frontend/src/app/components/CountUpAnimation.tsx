'use client';
import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
	target: number;
	suffix?: string;
}

export function CountUpAnimation({ target, suffix = '' }: CountUpProps) {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const hasAnimated = useRef(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated.current) {
					hasAnimated.current = true;
					const duration = 3000;
					const startTime = performance.now();

					const animate = (currentTime: number) => {
						const elapsed = currentTime - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const eased = 1 - (1 - progress) * (1 - progress);
						setCount(Math.floor(eased * target));

						if (progress < 1) {
							requestAnimationFrame(animate);
						}
					};
					requestAnimationFrame(animate);
				}
			},
			{
				threshold: 0.1,
			},
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [target]);

	return (
		<span
			ref={ref}
			className="font-semibold">
			{count.toLocaleString('id-ID')} {suffix}
		</span>
	);
}
