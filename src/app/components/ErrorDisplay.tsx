import Link from 'next/link';

interface ErrorDisplayProps {
	message: string;
	showReset?: boolean;
	onReset?: () => void;
	showHomeLink?: boolean;
}

export function ErrorDisplay({
	message,
	showReset = false,
	onReset,
	showHomeLink = false,
}: ErrorDisplayProps) {
	return (
		<div className="flex w-screen h-screen">
			<div className="m-auto text-center">
				<h1 className="text-5xl font-bold">Alamak!</h1>
				<p className="text-xl text-slate-500 my-3">{message}</p>
				{showReset && onReset && (
					<button
						onClick={onReset}
						className="px-4 py-2 bg-primary text-secondary rounded-md hover:bg-primary/80 transition">
						Coba Lagi
					</button>
				)}
				{showHomeLink && (
					<div className="mt-4">
						<Link
							href={'/'}
							className="text-primary underline hover:text-primary/80">
							Kembali ke Beranda
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
