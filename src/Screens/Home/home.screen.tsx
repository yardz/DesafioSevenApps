import React, { FunctionComponent, useMemo, useEffect } from 'react';
import { RefreshControl } from 'react-native';

import { HomeView } from './home.screen.style';

import { ScrollView, SafeAreaView } from '../../StyledComponents';
import { FeaturedMovie, ListMovies } from '../../Components';

import { useRequest } from '../../Hooks';
import { getListsMovies, ListsMovies } from '../../Services';

interface Props {}
export const HomeScreen: FunctionComponent<Props> = () => {
	const movieId = 120; // senhor dos aneis :p

	const [loading, error, result, nextPage] = useRequest<{ listId: number; title: string }, ListsMovies>(
		getListsMovies,
		{ id: movieId, paginate: true },
		list => list.results.map(item => ({ listId: item.id, title: item.name })),
	);

	useEffect(() => {
		nextPage();
	}, []);

	// Otimizando montagem do componente
	const featuredMovie = useMemo(() => <FeaturedMovie movieId={movieId} />, [movieId]);
	const moviesList = useMemo(() => result.map((listProps, key) => <ListMovies key={key} {...listProps} />), [result]);

	return (
		<SafeAreaView>
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={loading}
						onRefresh={() => {
							nextPage();
						}}
					/>
				}>
				<HomeView>
					<>
						{featuredMovie}
						{moviesList}
					</>
				</HomeView>
			</ScrollView>
		</SafeAreaView>
	);
};
