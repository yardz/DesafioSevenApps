import React, { FunctionComponent, useContext, useEffect } from 'react';
import { TouchableHighlight } from 'react-native';
import { NavigationContext } from 'react-navigation';
import { ThemeContext } from 'styled-components';

import { useState } from '../../Hooks';
import { getMovie, Movie } from '../../Services';

import { Box, Mask, PlayButtom, Image, Title } from './featuredMovie.style';
import { Loading } from '../../StyledComponents';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
	movieId: number;
}
export const FeaturedMovie: FunctionComponent<Props> = ({ movieId }) => {
	const { navigate } = useContext(NavigationContext);
	const theme = useContext(ThemeContext);
	const [movie, setMovie] = useState<Movie>(undefined);

	useEffect(() => {
		getMovie(movieId)
			.then(response => {
				setMovie(response);
			})
			.catch(error => {
				console.log(error);
			});
	}, [movieId]);

	if (!movie) {
		return <Loading />;
	}

	return (
		<>
			{movie && (
				<TouchableHighlight
					onPress={() => {
						navigate('Details', { movieId });
					}}>
					<Box>
						<Mask>
							<PlayButtom>
								<FontAwesomeIcon icon={faPlayCircle} size={80} color={theme.text} style={{ display: 'flex' }} />
							</PlayButtom>
							<Title>{movie.title}</Title>
						</Mask>
						<Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} />
					</Box>
				</TouchableHighlight>
			)}
		</>
	);
};
