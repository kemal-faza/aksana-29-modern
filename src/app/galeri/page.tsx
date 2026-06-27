import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';
import { LazyVideo } from '@/app/components/LazyVideo';

export default function Gallery() {
	return (
		<>
			<Header classColor="text-primary bg-secondary/70 lg:bg-primary lg:text-secondary" />
			<main
				id="main-content"
				className="px-16 py-24">
				<h1 className="sr-only">Galeri</h1>
				<div className="w-full">
					<h2 className="text-4xl font-bold uppercase text-center">
						Video Angkatan
					</h2>
					<div className="py-16">
						<LazyVideo
							src="https://drive.google.com/file/d/1vJTo8jujciCuFsyKsdmBY2WqlSPpHK9i/preview"
							title="Video Angkatan"
						/>
					</div>
				</div>
				<div className="w-full cv-auto">
					<h2 className="text-4xl font-bold uppercase text-center">
						After Movie
					</h2>
					<div className="py-16">
						<LazyVideo
							src="https://drive.google.com/file/d/1vScWn_hF_GCe3wlnEcuKA9eITuLMqkNX/preview"
							title="After Movie"
						/>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
