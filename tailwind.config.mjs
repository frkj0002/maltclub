/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	/* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {
		/* Tilføj din egen farvepalette nedenfor */
		colors: {
			transparent: "transparent",
			current: "currentColor",
			"colors-green-950": "rgba(17, 20, 15, 1)",
			"colors-green-900": "rgba(34, 41, 31, 1)",
			"colors-green-800": "rgba(66, 78, 59, 1)",
			"colors-green-700": "rgba(101, 119, 90, 1)",
			"colors-green-600": "rgba(136, 156, 125, 1)",
			"colors-green-500": "rgba(172, 186, 164, 1)",
			"colors-green-400": "rgba(189, 200, 183, 1)",
			"colors-green-300": "rgba(205, 213, 200, 1)",
			"colors-green-200": "rgba(221, 226, 217, 1)",
			"colors-green-100": "rgba(239, 242, 238, 1)",
			"colors-green-50": "rgba(247, 248, 246, 1)",
			"colors-blue-950": "rgba(2, 3, 3, 1)",
			"colors-blue-900": "rgba(5, 10, 10, 1)",
			"colors-blue-800": "rgba(8, 16, 17, 1)",
			"colors-blue-700": "rgba(13, 25, 27, 1)",
			"colors-blue-600": "rgba(18, 32, 33, 1)",
			"colors-blue-500": "rgba(23, 41, 43, 1)",
			"colors-blue-400": "rgba(53, 95, 100, 1)",
			"colors-blue-300": "rgba(85, 152, 159, 1)",
			"colors-blue-200": "rgba(139, 187, 193, 1)",
			"colors-blue-100": "rgba(199, 222, 225, 1)",
			"colors-blue-50": "rgba(224, 238, 239, 1)",
			"colors-yellow-50": "rgba(254, 255, 245, 1)",
			"colors-yellow-100": "rgba(253, 255, 240, 1)",
			"colors-yellow-200": "rgba(251, 254, 225, 1)",
			"colors-yellow-300": "rgba(248, 254, 205, 1)",
			"colors-yellow-400": "rgba(246, 253, 190, 1)",
			"colors-yellow-500": "rgba(244, 253, 175, 1)",
			"colors-yellow-600": "rgba(232, 251, 91, 1)",
			"colors-yellow-700": "rgba(220, 249, 6, 1)",
			"colors-yellow-800": "rgba(150, 169, 4, 1)",
			"colors-yellow-900": "rgba(75, 85, 2, 1)",
			"colors-yellow-950": "rgba(35, 40, 1, 1)",

			// Tokens
			"backgrounds-header": "var(--colors-blue-500)",
			"backgrounds-body": "var(--colors-blue-500)",
			"backgrounds-footer": "var(--colors-blue-600)",
			"text-p": "var(--colors-green-50)",
			"text-headers": "var(--colors-green-50)",
			"buttons-primary-background": "var(--colors-yellow-500)",
			"buttons-primary-text": "var(--colors-blue-500)",
			"buttons-primary-stroke-hover": "var(--colors-yellow-500)",
			"buttons-primary-text-hover": "var(--colors-yellow-500)",
			"buttons-secondary-text": "var(--colors-yellow-500)",
			"buttons-tertiary-stroke": "var(--colors-blue-500)",
			"buttons-tertiary-text": "var(--colors-blue-500)",
			"buttons-tertiary-background-hover": "var(--colors-blue-500)",
			"buttons-tertiary-text-hover": "var(--colors-green-500)",
			"buttons-secondary-stroke": "var(--colors-yellow-500)",
			"buttons-secondary-background-hover": "var(--colors-yellow-500)",
			"buttons-secondary-text-hover": "var(--colors-blue-500)",
			"lines-color": "var(--colors-blue-400)",
			"form-text": "var(--colors-blue-500)",
			"form-stroke": "var(--colors-blue-500)",
			"form-background": "var(--colors-green-500)",
			accordions: "var(--colors-green-50)",
		},
	},

	/* Tilføj din egen spacing nedenfor */
	spacing: {
		"spacing-xxs": "8px",
		"spacing-xs": "16px",
		"spacing-s": "24px",
		"spacing-sm": "32px",
		"spacing-m": "40px",
		"spacing-ml": "48px",
		"spacing-lg": "64px",
		"spacing-xl": "80px",
		"spacing-2xl": "96px",
		"spacing-3xl": "112px",
		"spacing-4xl": "128px",
		"spacing-5xl": "160px",
		"spacing-6xl": "208px",
		"spacing-7xl": "320px",
		"spacing-8xl": "360px",
		"spacing-9xl": "424px",
		"border-main": "0.5px",
		"border-text": "2px",
	},

	/* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
	fontFamily: {
		sans: ["Inter", "sans-serif"],
	},

	/* Tilføj dit typografiske hierarki herunder */
	fontSize: {
		header1mobile: ["4.375rem", { lineHeight: "normal" }],
		header2mobile: ["2.5rem", { lineHeight: "normal" }],
		header3mobile: ["1.5625rem", { lineHeight: "normal" }],
		header4mobile: ["1.3125rem", { lineHeight: "normal" }],
		header5mobile: ["1.0625rem", { lineHeight: "normal" }],
		paragraphmobile: ["0.9375rem", { lineHeight: "1.40625rem" }],

		header1: ["8.125rem", { lineHeight: "normal" }],
		header2: ["3.75rem", { lineHeight: "normal" }],
		header3: ["1.875rem", { lineHeight: "normal" }],
		header4: ["1.5625rem", { lineHeight: "normal" }],
		header5: ["1.25rem", { lineHeight: "normal" }],
		paragraph: ["1.3125rem", { lineHeight: "2rem" }],
	},

	/* Tilføj dit fontvægt-hierarki nedenfor */
	fontWeight: {
		medium: "500",
		semibold: "600",
	},

	/* Borders - borderstørrelser herunder */
	borderWidth: {
		small: "1px",
		large: "2px",
	},

	extend: {
		/* Tilføj din egen farvepalette nedenfor */
		// colors: {
		//     transparent: 'transparent',
		//     current: 'currentColor',
		//     'farvenavn': {
		//         50: '#hexkode',
		//         100: '#hexkode',
		//         200: '#hexkode',
		//         300: '#hexkode',
		//         400: '#hexkode',
		//         500: '#hexkode',
		//         600: '#hexkode',
		//         700: '#hexkode',
		//         800: '#hexkode',
		//         900: '#hexkode',
		//     },
		//     'white': '#fff',
		//     'black': '#000',
		// },
		/* Tilføj din egen spacing nedenfor */
		// spacing: {
		//     'm': '40px',
		// },
		/* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
		// fontFamily: {
		//     sans: ['Prompt', 'sans-serif'],
		//     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
		// },
		/* Tilføj dit typografiske hierarki herunder */
		// fontSize: {
		//     base: ['1rem', { lineHeight: '1.5rem' }],
		//     large: ['2.5rem', { lineHeight: '3.75rem' }],
		//   },
		/* Tilføj dit fontvægt-hierarki nedenfor */
		//   fontWeight: {
		//     regular: '400',
		//   },
		/* Borders - borderstørrelser herunder */
		// borderWidth: {
		//     DEFAULT: '1px',
		//     0: '0px',
		//     2: '2px',
		// },
		/* Border radius størrelser herunder */
		// borderRadius: {
		//     DEFAULT: '1.25rem',
		//     none: '0px',
		// },
		/* Box shadows herunder */
		// boxShadow: {
		//     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
		// },
	},

	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
