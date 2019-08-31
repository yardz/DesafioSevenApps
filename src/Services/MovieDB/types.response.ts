interface Elasticsearch<T> {
	page: number;
	results: T[];
	total_results: number;
	total_pages: number;
}

export interface Lists {
	description: string;
	favorite_count: number;
	id: number;
	item_count: number;
	iso_639_1: string;
	list_type: string;
	name: string;
	poster_path: null;
}
export interface ListsMovies extends Elasticsearch<Lists> {
	id: number;
}

export interface ListItem {
	poster_path: string;
	adult: boolean;
	overview: string;
	release_date: string;
	original_title: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	original_language: string;
	title: string;
	backdrop_path: null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
}
export interface List {
	created_by: string;
	description: string;
	favorite_count: number;
	id: string;
	items: ListItem[];
	item_count: number;
	iso_639_1: string;
	name: string;
	poster_path: string;
}

export interface SimilarMovie {
	adult: boolean;
	backdrop_path: any;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	release_date: string;
	poster_path: string;
	popularity: number;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
export interface ListSimilarMovies extends Elasticsearch<SimilarMovie> {}

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: any;
	budget: number;
	genres: {
		id: number;
		name: string;
	}[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: {
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}[];
	production_countries: {
		iso_3166_1: string;
		name: string;
	}[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: {
		iso_639_1: string;
		name: string;
	}[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
