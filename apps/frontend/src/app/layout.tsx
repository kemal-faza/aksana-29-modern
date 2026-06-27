import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-bebas',
	display: 'swap',
});

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Aksana 29 MAN Kapuas',
	description: 'Website Buku Tahunan Aksana 29 MAN Kapuas',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`scroll-smooth ${bebasNeue.variable} ${inter.variable}`}>
			<body className="font-inter">{children}</body>
		</html>
	);
}
