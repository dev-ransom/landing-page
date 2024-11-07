import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				bgColor: "#F0EFF9",
				baseColor: "#8a00c7",
				basehover: "#8a00c7",
				footer: "#1f2942",
				textColor: "#8492a6",
			},
			screens: {
				xs: "400px",
				"3xl": "1680px",
				"4xl": "2200px",
			},
		},
	},
	plugins: [],
};
export default config;
