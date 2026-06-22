import { ErrorDisplay } from './components/ErrorDisplay';

export default function NotFound() {
	return (
		<ErrorDisplay
			message="Halaman tidak ditemukan!"
			showHomeLink
		/>
	);
}
