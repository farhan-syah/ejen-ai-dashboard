/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				'2xs': ['0.7rem', '0.85rem'],
				base: ['0.95rem'],
				'2.5xl': ['1.6rem', '2.0rem'],
				'3xl': ['1.7rem', '2.0rem']
			},
			spacing: {
				0.5: '0.125rem'
			}
		}
	},

	plugins: []
};

module.exports = config;
