'use client';
import Image from 'next/image';
import { getTeachers } from '../../../lib/firebase';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { useEffect, useRef, useState } from 'react';
import { Teacher } from '../../../lib/types';
import LoadingScreen from '../components/LoadingScreen';
import { ensureArray } from '../../../lib/utils';

const IMAGE_SIZES_ATTR =
	'(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw';

const SECTIONS = [
	{
		jabatan: 'Kepala Madrasah',
		darkMode: false,
	},
	{
		jabatan: 'Kepala Tata Usaha',
		darkMode: true,
	},
	{
		jabatan: 'Wakamad',
		darkMode: false,
	},
	{
		jabatan: 'Wali Kelas',
		darkMode: true,
	},
	{
		jabatan: 'Dewan Guru',
		darkMode: false,
	},
];

export default function TeachersPage() {
	const [teachers, setTeachers] = useState<Teacher[]>([]);
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getTeachers().then((data) => {
			setTeachers(data);
			setLoading(false);
		});
	}, []);

	if (loading) return <LoadingScreen />;

	return (
		<>
			<Header classColor="text-primary bg-secondary/70 lg:bg-primary lg:text-secondary">
				<SearchBar
					onSearch={setQuery}
					placeholderText="Cari guru..."
				/>
			</Header>
			<main
				id="main-content"
				className="pt-20">
				<h1 className="sr-only">Daftar Guru</h1>
				{query ? (
					<ResultSearch
						teachers={teachers}
						query={query}
					/>
				) : (
					SECTIONS.map((section, index) => (
						<LazySection
							minHeight={900}
							rootMargin="300px"
							key={section.jabatan}>
							<Cards
								teachers={teachers}
								jabatan={section.jabatan}
								darkMode={section.darkMode}
								shouldPreload={index === 0}
							/>
						</LazySection>
					))
				)}
			</main>
			<Footer />
		</>
	);
}

function LazySection({
	children,
	rootMargin = '200px',
	minHeight = 800,
}: {
	children: React.ReactNode;
	rootMargin?: string;
	minHeight?: number;
}) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!ref.current || isVisible) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin },
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [isVisible, rootMargin]);

	return (
		<div
			ref={ref}
			style={!isVisible ? { minHeight } : undefined}>
			{isVisible ? children : null}
		</div>
	);
}

function Cards({
	teachers,
	jabatan = '',
	darkMode = false,
	shouldPreload,
}: {
	teachers: Teacher[];
	jabatan: string;
	darkMode?: boolean;
	shouldPreload?: boolean;
}) {
	const filtered = teachers.filter((t) => t.jabatan.includes(jabatan));

	return (
		<section
			className={`px-16 py-24 ${
				darkMode
					? 'bg-primary text-secondary'
					: 'bg-secondary text-primary'
			} cv-auto`}>
			<div className="container mx-auto">
				<div className="w-full text-center">
					<h2 className="text-2xl lg:text-3xl font-bold uppercase mb-7">
						{jabatan == 'Wakamad'
							? 'Wakil Kepala Madrasah'
							: jabatan}
					</h2>
					<div className="flex flex-wrap justify-center">
						{filtered.map((teacher, index) => (
							<TeacherCard
								key={teacher.nama}
								teacher={teacher}
								darkMode={darkMode}
								isPriority={shouldPreload && index === 0}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function TeacherCard({
	teacher,
	darkMode,
	isPriority,
}: {
	teacher: Teacher;
	darkMode: boolean;
	isPriority?: boolean;
}) {
	const subjects = ensureArray(teacher.mapel);

	return (
		<div
			key={teacher.nama}
			className="w-full xl:w-1/4 lg:w-1/3 sm:w-1/2 p-3">
			<div
				className={`rounded-md overflow-hidden shadow-lg ${
					!darkMode
						? 'bg-primary text-secondary'
						: 'bg-secondary text-primary'
				}`}>
				<Image
					src={`/img/guru/${teacher.image}`}
					alt={teacher.nama}
					width={1080}
					height={1920}
					sizes={IMAGE_SIZES_ATTR}
					priority={isPriority}
					className="w-full shadow"
					style={{ height: 'auto' }}
				/>
				<div className="p-4">
					<h4 className="text-lg font-semibold">{teacher.nama}</h4>
					<h5 className="text-sm font-light py-3 border-b">
						{teacher.jabatan}
					</h5>
					<div className="flex flex-wrap text-sm font-light">
						{subjects.map((subject, i, arr) => {
							const words = subject.split(' ');
							const prevWords = arr[i - 1]?.split(' ') ?? [];
							const nextWords = arr[i + 1]?.split(' ') ?? [];

							let classes = '';
							if (words.length > 2 || arr.length === 1) {
								classes = 'w-full';
							} else if (
								prevWords.length > 2 ||
								nextWords.length > 2 ||
								!arr[i + 1]
							) {
								classes = 'w-full';
							} else {
								classes = `w-1/2 ${i % 2 === 0 ? 'border-r' : ''}`;
							}

							return (
								<p
									key={subject}
									className={`py-3 ${classes}`}>
									{subject}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

function ResultSearch({
	teachers,
	query,
}: {
	teachers: Teacher[];
	query: string;
}) {
	const results = teachers.filter((teacher) =>
		teacher.nama.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<section className="px-16 py-24 cv-auto">
			<div className="container mx-auto">
				<div className="w-full text-center">
					<h2 className="text-2xl lg:text-3xl font-bold uppercase mb-7">
						Dewan Guru
					</h2>
					<div className="flex flex-wrap justify-center">
						{results.map((teacher) => (
							<TeacherCard
								key={teacher.nama}
								teacher={teacher}
								darkMode={false}
								isPriority={false}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
