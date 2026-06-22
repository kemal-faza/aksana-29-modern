/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				bebas: ['var(--font-bebas)', 'sans-serif'],
				inter: ['var(--font-inter)', 'sans-serif'],
			},
			colors: {
				primary: '#065f46',
				secondary: '#f5f5f5',
				tertiary: '#E5BA73',
				dark: '#171717',
			},
			animation: {
				'zig-zag': 'zig-zag 1.5s ease-in-out infinite',
			},
			keyframes: {
				'zig-zag': {
					'0%, 100%': {
						transform: 'translateX(0%)',
					},
					'50%': {
						transform: 'translateX(80%)',
					},
				},
			},
		},
	},
	plugins: [],
};
