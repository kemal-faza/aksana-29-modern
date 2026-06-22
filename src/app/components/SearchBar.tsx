'use client';

interface SearchBarProps {
	onSearch: (keyword: string) => void;
	placeholderText?: string;
}

export function SearchBar({
	onSearch,
	placeholderText = 'Cari...',
}: SearchBarProps) {
	return (
		<input
			type="text"
			placeholder={placeholderText}
			autoFocus
			onChange={(e) => {
				window.scrollTo({
					top: 0,
				});
				onSearch(e.target.value);
			}}
			className=" w-full text-sm text-dark font-normal px-4 py-2 border border-slate-400 rounded-full focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 placeholder:text-slate-400 placeholder:italic"
		/>
	);
}
