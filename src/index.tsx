import React, { FunctionComponent, useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './Route';

const AppContainer: FunctionComponent = () => {
	const theme = useContext(ThemeContext);
	const Navigator = createAppContainer(AppNavigator(theme));
	return <Navigator />;
};

export default AppContainer;
