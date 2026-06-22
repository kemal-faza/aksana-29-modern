'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'react-feather';
import { cn } from '../../../lib/utils';

const CLASSES = [
	'XII IPA 1',
	'XII IPA 2',
	'XII IPA 3',
	'XII IPA 4',
	'XII IPS 1',
	'XII IPS 2',
	'XII IPS 3',
	'XII PAI',
];

interface HeaderProps {
	classColor?: string;
	children?: React.ReactNode;
}

export function Header({ classColor = '', children }: HeaderProps) {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const header = document.querySelector('header');
		if (!header) return;
		const handleScroll = () => {
			if (pathname === '/') {
				if (window.scrollY > 0) {
					header.classList.add('navbar-fixed');
					header.classList.remove('lg:bg-transparent');
				} else {
					header.classList.remove('navbar-fixed');
					header.classList.add('lg:bg-transparent');
				}
			} else {
				if (window.scrollY > 0) {
					header.classList.replace(
						'lg:bg-primary',
						'lg:bg-primary/80',
					);
				} else {
					header.classList.replace(
						'lg:bg-primary/80',
						'lg:bg-primary',
					);
				}
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [pathname]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 ${classColor} backdrop-blur-sm z-10 transition duration-300`}>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between relative">
					<Link
						href="/"
						className="text-lg font-bold block py-4 px-4 lg:bg-inherit hover:bg-primary/20 lg:hover:bg-secondary/20 rounded-md transition duration-300">
						AKSANA 29
					</Link>
					<div className="flex items-center px-4">
						<button
							id="hamburger"
							name="hamburger"
							type="button"
							aria-label="Toggle navigation"
							aria-controls="nav-menu"
							aria-expanded={isNavOpen}
							className={cn(`block absolute right-4 lg:hidden`, {
								active: isNavOpen,
							})}
							onClick={() => setIsNavOpen(!isNavOpen)}>
							<span
								className={`w-[30px] h-[2px] my-[8.5px] block bg-primary transition duration-300 toggle origin-top-right`}></span>
							<span
								className={`w-[30px] h-[2px] my-[8.5px] block bg-primary transition duration-300 toggle`}></span>
							<span
								className={`w-[30px] h-[2px] my-[8.5px] block bg-primary transition duration-300 toggle origin-bottom-right`}></span>
						</button>
						<nav
							id="nav-menu"
							className={cn(
								`absolute py-3 bg-secondary lg:bg-transparent rounded-b-lg w-full right-0 top-full transition duration-300 -z-10 lg:z-0 lg:static lg:max-w-full`,
								{ active: isNavOpen },
							)}>
							<ul className="text-base block font-bold lg:flex lg:items-center">
								<li>
									<Link
										href="/guru"
										className="py-3 px-4 block w-full hover:bg-primary/20 lg:hover:bg-secondary/20 transition duration-300 lg:rounded-md">
										Guru
									</Link>
								</li>
								<li className="relative">
									<button
										className="py-3 px-4 w-full
				hover:bg-primary/20 lg:hover:bg-secondary/20 transition duration-300 flex items-center lg:rounded-md dropdown-toggle"
										onClick={() =>
											setIsDropdownOpen(!isDropdownOpen)
										}
										id="navbarDropdown">
										Kelas
										<ChevronDown
											size="16px"
											className="ml-1"
										/>
									</button>
									<ul
										className={cn(
											`lg:my-1 rounded-md text-secondary bg-primary lg:text-primary lg:bg-secondary transition delay-100 lg:delay-0 duration-300 lg:duration-150 ease-in-out lg:absolute lg:w-40 overflow-hidden lg:overflow-visible origin-top-left dropdown-navbar`,
											{ active: isDropdownOpen },
										)}
										id="navbarDropdown">
										{CLASSES.map((kelas) => (
											<li key={kelas}>
												<Link
													href={`/pesdik/${kelas.toLowerCase().replaceAll(' ', '-')}`}
													className="block py-3 px-4 w-full
									hover:bg-secondary/20 lg:hover:bg-primary/20 transition">
													{kelas}
												</Link>
											</li>
										))}
									</ul>
								</li>
								<li>
									<Link
										href="/galeri"
										className="py-3 px-4 block w-full hover:bg-primary/20 lg:hover:bg-secondary/20 lg:rounded-md transition duration-300">
										Galeri
									</Link>
								</li>
								<li className="px-3">{children}</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
