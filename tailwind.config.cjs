/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontSize: {
				ss: ["0.8rem", "0.95rem"],
				"3xs": ["0.6rem", "0.7rem"],
				"2xs": ["0.7rem", "0.85rem"],
				"2.5xl": ["1.6rem", "2.0rem"],
				"3xl": ["1.7rem", "2.0rem"]
			},
			spacing: {
				0.25: "0.0625rem",
				0.5: "0.125rem",
				0.75: "0.185rem"
			},
			boxShadow: {
				button: "0px 3px 3px -3px rgb(0 0 0 / 0.5)"
			},
			opacity: {
				15: "0.15"
			},
			keyframes: {
				"ping-sm": {
					"75%, 100%": { transform: "scale(1.8)", opacity: "0" }
				}
			},
			animation: {
				"ping-sm": "ping-sm 2s cubic-bezier(0, 0, 0.2, 1.5) infinite"
			}
		}
	},

	plugins: [require("@tailwindcss/typography")]
};

module.exports = config;
