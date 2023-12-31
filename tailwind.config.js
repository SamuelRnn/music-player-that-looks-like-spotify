/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			height: {
				app: 'min(600px, calc(100vh - 5rem))',
			},
			gridTemplateColumns: {
				'card-flow': 'repeat(auto-fill, minmax(180px, 1fr))',
			},
			colors: {
				black: {
					charcoal: '#181818',
					midnight: '#121212',

					full: '#000000',
				},
				blue: {
					eggplant: '#211246',
				},
				gray: {
					mist: '#a7a7a7',
					slate: '#272727',
				},
				green: {
					lime: '#1ed760',
					'lime-light': '#1fdf64',
				},
			},
			backgroundImage: {
				gradient: 'linear-gradient(180deg, rgba(33,18,70,1) 0%, rgba(18,18,18,1) 100%)',
			},
		},
	},
	plugins: [],
}
