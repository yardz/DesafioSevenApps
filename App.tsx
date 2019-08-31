import React, { FunctionComponent, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import AppContainer from './src/';

import { getActiveTheme } from './App.style';

const App: FunctionComponent = () => {
	const theme = useMemo(() => getActiveTheme(), []);
	return (
		<ThemeProvider theme={theme}>
			<AppContainer />
		</ThemeProvider>
	);
};
export default App;
