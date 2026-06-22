import Image from 'next/image';
import { User, Users } from 'react-feather';
import { CountUpAnimation } from './CountUpAnimation';

export function AboutSection() {
	return (
		<section
			id="about"
			className="pb-16 pt-6 cv-auto">
			<div className="container mx-auto text-dark">
				<div className="lg:w-1/2 md:w-2/3 w-full px-4 text-center mb-6 mx-auto">
					<h3 className="text-2xl my-3 lg:text-3xl font-bold uppercase">
						Tentang
					</h3>
					<hr />
				</div>
				<div className="w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
					<div className="h-fit shadow-lg rounded-md overflow-hidden">
						<Image
							src="/img/homepage/about/aksana.webp"
							width={480}
							height={270}
							alt="Aksana 29 MAN Kapuas"
							className="w-full"
							sizes="(max-width: 1024px) 100vw, 50vw"
							style={{ height: 'auto' }}
						/>
						<div className="px-6 py-4 text-center">
							<h4 className="text-lg font-bold uppercase mb-2">
								Aksana 29
							</h4>
							<p className="text-base text-justify">
								AKSANA 29 adalah sebutan untuk para peserta
								didik kelas 12 angkatan ke-29 MAN Kapuas
							</p>
							<ul className="mt-3 text-left text-base">
								<li className="border-b-2 border-secondary/80 px-4 py-2">
									Ketua Angkatan :{' '}
									<span className="font-bold">
										Akhmad Rezky Utama
									</span>
								</li>
								<li className="px-4 py-2 text-center">
									Jumlah Peserta Didik
									<div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 mt-2 w-full">
										<div className="flex items-center justify-center sm:justify-start">
											<User
												className="mr-2"
												color="#0c4a6e"
											/>
											<CountUpAnimation
												target={115}
												suffix="Orang"
											/>
										</div>
										<div className="flex items-center justify-center">
											<Users
												className="mr-2"
												color="#171717"
											/>
											<CountUpAnimation
												target={279}
												suffix="Orang"
											/>
										</div>
										<div className="flex items-center sm:justify-end justify-center">
											<User
												className="mr-2"
												color="#be185d"
											/>
											<CountUpAnimation
												target={164}
												suffix="Orang"
											/>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="h-fit shadow-lg rounded-md mt-5 lg:mt-0 overflow-hidden">
						<Image
							src="/img/homepage/about/web.webp"
							alt="Aksana 29 MAN Kapuas"
							sizes="(max-width: 1024px) 100vw, 50vw"
							width={480}
							height={270}
							className="w-full"
							style={{ height: 'auto' }}
						/>
						<div className="px-6 py-4 text-center">
							<h4 className="text-lg font-bold uppercase mb-2">
								Website Buku Angkatan
							</h4>
							<p className="text-base text-justify">
								Website Aksana 29 merupakan website yang
								dijadikan tempat bagaimana Angkatan 29 MAN
								Kapuas bercerita, bernostalgia, dan bertukar
								informasi satu sama lain nya dalam rangka
								mempererat tali ukhuwah silaturahmi antar sesama
								alumni MAN Kapuas tahun ajaran 2023/2024. <br />
								<br />
								Website ini juga menjadi bukti kemajuan
								tekonlogi yang menggantikan buku angkatan
								(fisik) yang sekarang bisa diakses dengan
								mudahnya secara digital (online)
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
