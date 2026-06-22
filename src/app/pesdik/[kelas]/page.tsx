'use client';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { getStudents, getTeachers } from '../../../../lib/firebase';
import { Teacher, Student } from '../../../../lib/types';
import { useParams } from 'next/navigation';
import LoadingScreen from '../../components/LoadingScreen';
import { ErrorDisplay } from '../../components/ErrorDisplay';
import { ensureArray } from '../../../../lib/utils';
import Image from 'next/image';

const IMAGE_SIZES_ATTR =
	'(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw';

export default function StudentsPage() {
	const params = useParams();
	const kelasParams = params.kelas as string;
	const kelas = kelasParams.toUpperCase().replaceAll('-', ' ');

	const [students, setStudents] = useState<Student[]>([]);
	const [walkel, setWalkel] = useState<Teacher | null>(null);
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadData = async () => {
			const [studentsData, teachersData] = await Promise.all([
				getStudents(),
				getTeachers(),
			]);
			const filteredStudents = studentsData
				.filter((s) => s.kelas == kelas)
				.sort((a, b) => a.nama.localeCompare(b.nama));

			const waliKelas = teachersData.find(
				(t) => t.jabatan === `Wali Kelas ${kelas}`,
			);

			if (!waliKelas) {
				setStudents([]);
			} else {
				setStudents(filteredStudents);
				setWalkel(waliKelas);
			}

			setLoading(false);
		};

		loadData();
	}, [kelas]);

	if (loading) return <LoadingScreen />;

	if (!walkel)
		return (
			<ErrorDisplay
				message={`Data kelas ${kelas} tidak ditemukan!`}
				showHomeLink
			/>
		);

	return (
		<>
			<Header
				classColor={`text-primary bg-secondary lg:bg-primary lg:text-secondary`}>
				<SearchBar
					onSearch={setQuery}
					placeholderText={`Cari pesdik...`}
				/>
			</Header>
			{query ? (
				<ResultSearch
					query={query}
					students={students}
				/>
			) : (
				<>
					<WalkelSection walkel={walkel} />
					<PesdikSection
						kelas={kelas}
						students={students}
					/>
				</>
			)}
			{/* <Modal /> */}
			<Footer />
		</>
	);
}

function WalkelSection({ walkel }: { walkel: Teacher }) {
	const subjects = ensureArray(walkel.mapel);

	return (
		<section className="px-16 py-24 cv-auto">
			<div className="container mx-auto">
				<div className="w-full text-center">
					<h2 className="text-2xl lg:text-3xl font-bold uppercase">
						{walkel.jabatan}
					</h2>
					<div className="w-full lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto mt-7 rounded-md overflow-hidden shadow-lg bg-primary text-secondary">
						<Image
							src={`/img/guru/${walkel.image}`}
							sizes={IMAGE_SIZES_ATTR}
							priority
							width={1080}
							height={1920}
							alt={walkel.jabatan}
							className="w-full shadow"
							style={{ height: 'auto' }}
						/>
						<div className="p-4">
							<h4 className="text-lg font-semibold">
								{walkel.nama}
							</h4>
							<h5 className="text-sm font-light py-3 border-b border-secondary">
								{walkel.jabatan}
							</h5>
							<div className="font-light flex flex-wrap text-sm">
								{subjects.map((subject) => (
									<p
										key={subject}
										className="py-3 w-full">
										{subject}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function PesdikSection({
	students,
	kelas,
}: {
	students: Student[];
	kelas: string;
}) {
	return (
		<section className="px-16 py-24 bg-primary text-secondary cv-auto">
			<div className="container mx-auto">
				<div className="w-full text-center">
					<h2 className="text-2xl lg:text-3xl font-bold uppercase mb-7">
						Peserta Didik Kelas {kelas}
					</h2>
					<div className="flex flex-wrap justify-center">
						{students.map((student) => (
							<div
								key={student.nama}
								className="w-full xl:w-1/4 lg:w-1/3 sm:w-1/2 p-3">
								<div className="rounded-md overflow-hidden shadow-lg bg-secondary text-primary">
									<Image
										src={`/img/pesdik/${student.image}`}
										sizes={IMAGE_SIZES_ATTR}
										alt={student.nama}
										width={1080}
										height={1920}
										className="w-full shadow"
									/>
									<div className="p-4">
										<h4 className="text-lg font-semibold">
											{student.nama}
										</h4>
										<h5 className="text-sm font-light py-3 border-b">
											{student.jabatan}
										</h5>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function ResultSearch({
	students,
	query,
}: {
	students: Student[];
	query: string;
}) {
	const results = students.filter((student) =>
		student.nama.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<section className="px-16 py-24 cv-auto">
			<div className="container mx-auto">
				<div className="w-full text-center">
					<h2 className="text-2xl lg:text-3xl font-bold uppercase mb-7">
						Hasil Pencarian
					</h2>
					<div className="flex flex-wrap justify-center">
						{results.map((student) => (
							<div
								key={student.nama}
								className="w-full xl:w-1/4 lg:w-1/3 sm:w-1/2 p-3">
								<div className="rounded-md overflow-hidden shadow-lg bg-secondary text-primary">
									<Image
										src={`/img/pesdik/${student.image}`}
										sizes={IMAGE_SIZES_ATTR}
										width={1080}
										height={1920}
										alt={student.nama}
										className="w-full shadow"
									/>
									<div className="p-4">
										<h4 className="text-lg font-semibold">
											{student.nama}
										</h4>
										<h5 className="text-sm font-light py-3 border-b">
											{student.jabatan}
										</h5>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
