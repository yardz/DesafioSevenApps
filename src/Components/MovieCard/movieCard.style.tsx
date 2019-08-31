import styled from 'styled-components/native';
import { Props } from '../../../App.style';

import { withTheme } from 'styled-components';

export const Image = withTheme(styled.Image<Props>`
	height: 200px;
	width: 200px;
	margin-right: 5px;
`);

export const Box = withTheme(styled.View<Props>`
	padding: 10px 0px;
`);
