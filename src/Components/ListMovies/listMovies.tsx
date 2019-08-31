import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { useState } from '../../Hooks';

import { MovieCard } from '../MovieCard';

import { getList } from '../../Services';

import { ScrollView } from '../../StyledComponents';
import { List as DisplayList, Title } from './listMovies.style';

const isCloseToEnd = ({ layoutMeasurement, contentOffset, contentSize }) => {
	return layoutMeasurement.width + contentOffset.x >= contentSize.width - 50;
};

interface Props {
	listId: number;
	title: string;
}
export const ListMovies: FunctionComponent<Props> = ({ listId, title }) => {
	// useEffect(() => {
	// 	console.log('+MONTANDO: ListMovies', listId);
	// 	return () => {
	// 		console.log('DESMONTANDO: ListMovies', listId);
	// 	};
	// });

	const [movies, setMovies] = useState<{ movieId: number; image: string }[]>([]);
	const [limit, setLimit] = useState(5);

	useEffect(() => {
		getList(listId)
			.then(response => {
				setMovies(response.items.map(item => ({ movieId: item.id, image: item.poster_path })));
			})
			.catch(error => {
				console.log(error);
			});
	}, [listId]);

	const cards = useMemo(() => movies.filter((i, number) => number < limit).map((movie, key) => <MovieCard key={key} {...movie} />), [
		movies,
		limit,
	]);

	if (movies.length === 0) {
		return <></>;
	}
	return (
		<DisplayList>
			<Title>{title}</Title>
			<ScrollView
				horizontal
				scrollEventThrottle={160000}
				onScroll={({ nativeEvent }) => {
					if (isCloseToEnd(nativeEvent)) {
						setLimit(limit + 10);
					}
				}}>
				{cards}
			</ScrollView>
		</DisplayList>
	);
};
