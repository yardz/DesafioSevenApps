import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

import { Props } from '../../../App.style';

export const List = withTheme(styled.View<Props>`
	padding: 20px 0;
	text-align: right;
`);

export const Title = withTheme(styled.Text<Props>`
	font-size: 15px;
	color: ${props => props.theme.text};
`);
