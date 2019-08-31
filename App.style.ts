import styled from 'styled-components/native';

export interface ThemeProps {
	background: string;
	text: string;
	inverse: {
		text: string;
		background: string;
	};
}

interface Themes {
	main: ThemeProps;
	dark: ThemeProps;
}
const theme: Themes = {
	main: {
		background: '#fff',
		text: '#000',
		inverse: {
			text: '#fff',
			background: '#000',
		},
	},
	dark: {
		background: '#000',
		text: '#fff',
		inverse: {
			text: '#000',
			background: '#fff',
		},
	},
};

export interface Props {
	theme?: ThemeProps;
}

export const getActiveTheme = (): ThemeProps => {
	return theme.dark;
};
