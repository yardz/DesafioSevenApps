import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

import { Props } from '../../../App.style';

export const View = withTheme(styled.View<Props>`
	background-color: ${props => props.theme.background};
`);
