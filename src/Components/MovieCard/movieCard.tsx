import React, { FunctionComponent, useContext, useEffect } from 'react';
import { NavigationContext } from 'react-navigation';
import { TouchableHighlight } from 'react-native';

import { Box, Image } from './movieCard.style';

interface Props {
	movieId: number;
	image: string;
}
export const MovieCard: FunctionComponent<Props> = ({ movieId, image }) => {
	const { navigate } = useContext(NavigationContext);
	return (
		<TouchableHighlight
			onPress={() => {
				navigate('Details', { movieId });
			}}>
			<Box>
				<Image source={{ uri: `https://image.tmdb.org/t/p/w342${image}` }} />
			</Box>
		</TouchableHighlight>
	);
};
