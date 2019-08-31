import React, { FunctionComponent, useContext, useMemo, useEffect } from 'react';
import { NavigationContext } from 'react-navigation';

import { useState } from '../../Hooks';
import { getMovie, Movie } from '../../Services';

import { DetailsView, Box, Image, Release, Title, TextDetails } from './details.screen.style';
import { ScrollView, SafeAreaView, Loading } from '../../StyledComponents';

import { SimilarMovies } from '../../Components';

import moment from 'moment';

interface Props {}
export const DetailsScreen: FunctionComponent<Props> = () => {
	const { getParam } = useContext(NavigationContext);
	const movieId = getParam('movieId');

	const [movie, setMovie] = useState<Movie>(undefined);
	const similarMovies = useMemo(() => <SimilarMovies movieId={movieId} />, [movieId]);
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
		<SafeAreaView>
			<ScrollView>
				<DetailsView>
					{movie && (
						<Box>
							<Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} />
							<Release>
								{moment(movie.release_date).format('DD/MM/YYYY')} {movie.runtime && <>- {movie.runtime} min</>}
							</Release>
							<Title>{movie.title}</Title>
							<TextDetails>{movie.overview}</TextDetails>
						</Box>
					)}
					{similarMovies}
				</DetailsView>
			</ScrollView>
		</SafeAreaView>
	);
};
