import styled from 'styled-components/native';
import { Props } from '../../../App.style';

import { withTheme } from 'styled-components';

export const HomeView = withTheme(styled.View<Props>`
	background-color: ${props => props.theme.background};
	min-height: 100%;
`);
