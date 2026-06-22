'use client';
import { ErrorDisplay } from './components/ErrorDisplay';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<ErrorDisplay
			message="Sepertinya ada yang salah!"
			showReset
			onReset={reset}
		/>
	);
}
