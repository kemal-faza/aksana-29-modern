import Image from 'next/image';

export function HeroSection() {
	return (
		<section
			className="relative w-full mt-14 md:mt-0"
			id="home">
			<Image
				src="/img/homepage/home.webp"
				alt="Home Page"
				sizes="100vw"
				priority
				width={1920}
				height={1080}
				className="w-full brightness-50"
				style={{ height: 'auto' }}
			/>
			<div className="w-full absolute top-0 right-1/2 h-full translate-x-1/2 flex items-center">
				<div className="flex flex-wrap justify-center text-center self-center my-auto">
					<h1 className="text-white text-[18vw] font-extrabold font-bebas tracking-[2vw] mx-auto drop-shadow-lg leading-none">
						AKSANA 29
					</h1>
					<h3 className="text-white text-[3vw] tracking-[1.3vw] font-extrabold lg:mb-28">
						MAN KAPUAS ANGKATAN KE - 29
					</h3>
				</div>
			</div>
		</section>
	);
}
