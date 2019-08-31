import styled from 'styled-components/native';
import { Props } from '../../../App.style';

import { withTheme } from 'styled-components';

export const Image = withTheme(styled.Image<Props>`
	height: 500px;
	width: 100%;
`);

export const Box = withTheme(styled.View<Props>`
	overflow: hidden;
`);

export const Mask = withTheme(styled.View<Props>`
	position: absolute;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 100;
`);

export const PlayButtom = withTheme(styled.View<Props>`
	padding-top: 200px;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 100%;
`);

export const Title = withTheme(styled.Text<Props>`
	position: absolute;
	bottom: 0%;
	padding: 20px 0px;
	text-align: center;
	font-size: 25px;
	width: 100%;
	color: ${props => props.theme.text};
`);
