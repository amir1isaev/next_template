import { ETheme } from '@/enums'

const dark = {
	bg: '#000000',
	secondary: '#1c1c1e',
	secondary90: 'rgba(28, 28, 30, 0.9)',
	font: '#ffffff',

	primary: '#0a84ff',
	primary10: 'rgba(10, 132, 255, 0.1)',
	primary20: 'rgba(10, 132, 255, 0.2)',
	primary30: 'rgba(10, 132, 255, 0.3)',
	hoverPrimary: '#0a84ff',

	white: '#ffffff',
	white25: 'rgba(255, 255, 255, 0.25)',
	white50: 'rgba(255, 255, 255, 0.5)',

	placeholder: '',

	black: '#1c1c1e',
	dark: '#000000',

	pink: '#ff375f',
	purple: '#bf5af2',
	indigo: '#5e5ce6',

	brown: '#ac8e68',
	blue: '#0a84ff',
	cyan: '#64d2ff',

	teal: '#40c8e0',
	mint: '#66d4cf',
	green: '#26d158',

	yellow: '#ffd60a',
	orange: '#ff9f0a',
	red: '#ff453a',

	gray6: '#1c1c1e',
	gray5: '#2c2c2e',
	gray4: '#3a3a3c',
	gray3: '#48484a',
	gray2: '#636366',
	gray: '#8E8E93',
}

const light = {
	bg: '#ffffff',
	secondary: '#F6F6F7',
	secondary90: 'rgba(246, 246, 247, 0.9)',
	font: '#1c1c1e',

	primary: '#007aff',
	primary10: 'rgba(0, 122, 255, 0.1)',
	primary20: 'rgba(0, 122, 255, 0.2)',
	primary30: 'rgba(0, 122, 255, 0.3)',
	hoverPrimary: '#0a84ff',

	white: '#ffffff',
	white25: 'rgba(255, 255, 255, 0.25)',
	white50: 'rgba(255, 255, 255, 0.50)',

	placeholder: '',

	black: '#1c1c1e',
	dark: '#000000',

	purple: '#af52de',
	indigo: '#5856d6',
	pink: '#ff375f',

	brown: '#a2845e',
	blue: '#007aff',
	cyan: '#32ade6',

	teal: '#30b0c7',
	mint: '#00c7be',
	green: '#34c759',

	yellow: '#ffcc00',
	orange: '#ff9500',
	red: '#ff3b30',

	gray6: '#F2F2F7',
	gray5: '#E5E5EA',
	gray4: '#D1D1D6',
	gray3: '#C7C7CC',
	gray2: '#AEAEB2',
	gray: '#8E8E93',
}

const defaultTheme = {
	fontSizes: {
		tiny: 14,
		caption: 16,
		body: 18,
		title5: 20,
		title4: 22,
		title3: 25,
		title2: 28,
		title1: 32,
	},
	fontWeights: {
		body: 400,
		subheading: 500,
		link: 600,
		bold: 700,
		heading: 800,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.3,
		code: 1.6,
	},
	fontFamilies: {
		Montserrat: 'Montserrat',
		RobotoSlab: 'RobotoSlab',
		OpenSans: 'OpenSans',
	},
	borderRadius: {
		small: 3,
		medium: 10,
		large: 15,
	},
	sizes: {
		button: { height: 44, minWidth: 175 },
		segment: { height: 42 },
		containers: {
			small: 978,
			medium: 1920,
			large: 1920,
		},
		menu: { item: { height: 42 } },
		input: { height: 49, minWidth: 200 },
		icon: {
			small: 22,
			medium: 30,
			large: 38,
		},
	},
}

export const lightTheme = { ...defaultTheme, type: ETheme.LIGHT, colors: light }
export const darkTheme = { ...defaultTheme, type: ETheme.DARK, colors: dark }
export type ITheme = typeof darkTheme
