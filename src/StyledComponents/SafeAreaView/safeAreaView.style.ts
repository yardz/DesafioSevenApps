import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

import { Props } from '../../../App.style';

export const SafeAreaView = withTheme(styled.SafeAreaView<Props>`
	margin-top: 64px;
	background-color: ${props => props.theme.background};
`);
