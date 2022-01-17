module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
			},
			colors: {
				background: '#282a36',
				terminalBar: '#1E1F28',
				currentLine: '#44475a',
				foreground: '#f8f8f2',
				comment: '#6272a4',
				cyan: '#8be9fd',
				green: '#50fa7b',
				orange: '#ffb86c',
				pink: '#ff79c6',
				purple: '#bd93f9',
				red: '#ff5555',
				yellow: '#f1fa8c',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
