import { createStackNavigator } from 'react-navigation';

import { HomeScreen, DetailsScreen } from '../Screens';
import { ThemeProps } from '../../App.style';

export default (theme: ThemeProps) =>
	createStackNavigator(
		{
			Home: {
				screen: HomeScreen,
				navigationOptions: {
					title: 'Home',
				},
			},
			Details: {
				screen: DetailsScreen,
				navigationOptions: {
					title: 'Details',
				},
			},
		},
		{
			initialRouteName: 'Home',
			headerMode: 'screen',
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor: theme.background,
				},
				headerTintColor: theme.text,
				headerTransparent: true,
			},
		},
	);
