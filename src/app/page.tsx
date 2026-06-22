import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';

export default function Homepage() {
	return (
		<>
			<Header classColor="text-primary bg-secondary lg:bg-transparent lg:text-secondary" />
			<main
				id="main-content"
				className="pt-14 md:pt-0">
				<HeroSection />
				<AboutSection />
			</main>
			<Footer />
		</>
	);
}
