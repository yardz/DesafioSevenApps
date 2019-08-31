import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

import { Props } from '../../../App.style';

export const Text = withTheme(styled.Text<Props>`
	color: ${props => props.theme.text};
`);
