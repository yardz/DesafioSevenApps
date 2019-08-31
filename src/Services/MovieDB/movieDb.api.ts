import axios from 'axios';
import { api_key, base_url } from './configs';

import { ListsMovies, List, Movie, ListSimilarMovies } from './types.response';

export const getListsMovies = async (movieId: number, page: number): Promise<ListsMovies> => {
	// console.log('getListsMovies', movieId, page);
	const api = `movie/${movieId}/lists`;
	const response = await axios.get<ListsMovies>(`${base_url}/${api}`, { params: { api_key, language: 'en', page: page } });
	return response.data;
};

export const getList = async (listId: number): Promise<List> => {
	// console.log('getList', listId);
	const api = `list/${listId}`;
	const response = await axios.get<List>(`${base_url}/${api}`, { params: { api_key, language: 'en' } });
	return response.data;
};

export const getMovie = async (movieId: number): Promise<Movie> => {
	// console.log('getMovie', movieId);
	const api = `movie/${movieId}`;
	const response = await axios.get<Movie>(`${base_url}/${api}`, { params: { api_key } });
	return response.data;
};

export const getSimilarMovies = async (movieId: number, page: number): Promise<ListSimilarMovies> => {
	// console.log('getSimilarMovies', movieId);
	const api = `movie/${movieId}/similar`;
	const response = await axios.get<ListSimilarMovies>(`${base_url}/${api}`, { params: { api_key, language: 'en', page: page } });
	return response.data;
};
