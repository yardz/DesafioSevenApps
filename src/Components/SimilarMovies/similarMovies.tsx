import React, { FunctionComponent, useEffect, useMemo } from 'react';

import { MovieCard } from '../MovieCard';

import { useRequest } from '../../Hooks';
import { getSimilarMovies, ListSimilarMovies } from '../../Services';

import { ScrollView } from '../../StyledComponents';
import { List as DisplayList, Title } from './similarMovies.style';

const isCloseToEnd = ({ layoutMeasurement, contentOffset, contentSize }) => {
	return layoutMeasurement.width + contentOffset.x >= contentSize.width - 50;
};

interface Props {
	movieId: number;
}
export const SimilarMovies: FunctionComponent<Props> = ({ movieId }) => {
	useEffect(() => {
		console.log('+MONTANDO: SimilarMovies', movieId);
		return () => {
			console.log('DESMONTANDO: SimilarMovies', movieId);
		};
	});
	const [loading, error, movies, nextPage] = useRequest<{ movieId: number; image: string }, ListSimilarMovies>(
		getSimilarMovies,
		{ id: movieId, paginate: true },
		list => list.results.map(item => ({ movieId: item.id, image: item.poster_path })),
	);

	const cards = useMemo(() => movies.map((movie, key) => <MovieCard key={key} {...movie} />), [movies]);

	useEffect(() => {
		if (movies.length === 0) {
			nextPage();
		}
	}, [movieId]);

	if (movies.length === 0) {
		return <></>;
	}
	return (
		<DisplayList>
			<Title>Similar Movies</Title>
			<ScrollView
				horizontal
				scrollEventThrottle={160000}
				onScroll={({ nativeEvent }) => {
					if (isCloseToEnd(nativeEvent) && !loading) {
						nextPage();
					}
				}}>
				{cards}
			</ScrollView>
		</DisplayList>
	);
};
