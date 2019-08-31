import styled from 'styled-components/native';
import { Props } from '../../../App.style';

import { withTheme } from 'styled-components';

export const DetailsView = withTheme(styled.View<Props>`
	background-color: ${props => props.theme.background};
`);

export const Box = withTheme(styled.View<Props>`
	overflow: hidden;
`);

export const Image = withTheme(styled.Image<Props>`
	height: 300px;
	width: 60%;
	margin: 0 auto;
`);

export const Release = withTheme(styled.Text<Props>`
	padding: 10px 0px;
	width: 100%;
	color: ${props => props.theme.text};
	opacity: 0.3;
	font-size: 12px;
	text-align: center;
`);

export const Title = withTheme(styled.Text<Props>`
	padding: 20px 0px;
	width: 100%;
	color: ${props => props.theme.text};
	font-size: 20px;
	text-align: center;
`);

export const TextDetails = withTheme(styled.Text<Props>`
	font-size: 12px;
	width: 90%;
	color: ${props => props.theme.text};
	margin: 10px auto;
`);
