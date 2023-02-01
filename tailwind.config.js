/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./src/screens/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					red: "#F90716",
					gray: "#76767B",
					yellow: "#F9B208",
				},
			},
		},
	},
	plugins: [],
};
