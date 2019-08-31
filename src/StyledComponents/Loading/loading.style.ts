import styled from 'styled-components/native';
import { Props } from '../../../App.style';

import { withTheme } from 'styled-components';

export const Loading = withTheme(styled.ActivityIndicator<Props>`
	color: ${props => props.theme.text};
`);
