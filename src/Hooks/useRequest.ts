import { useEffect, useReducer } from 'react';

interface ActionRequestReducer__next {
	type: 'next';
}
interface ActionRequestReducer__success<T> {
	type: 'success';
	payload: T[];
}
interface ActionRequestReducer__fail {
	type: 'fail';
	payload: any;
}
interface ActionRequestReducer__reset {
	type: 'reset';
	payload: { id: number };
}
type ActionRequestReducer<T> =
	| ActionRequestReducer__next
	| ActionRequestReducer__success<T>
	| ActionRequestReducer__fail
	| ActionRequestReducer__reset;
interface StateRequestReducer<T> {
	loading: boolean;
	error: any;
	data: T[];
	id: number;
	page: number;
}

type ReducerRequest<S> = (state: StateRequestReducer<S>, action: ActionRequestReducer<S>) => StateRequestReducer<S>;
const reducerRequest: ReducerRequest<any> = (state, action) => {
	switch (action.type) {
		case 'reset':
			return { ...state, ...action.payload, loading: false, error: undefined, page: 1, data: [] };
		case 'next':
			const nextPage = state.page !== undefined ? state.page + 1 : undefined;
			return { ...state, loading: true, error: undefined, page: nextPage };
		case 'success':
			const data = state.data.concat(action.payload);
			return { ...state, loading: false, error: undefined, data };
		case 'fail':
			const error = state.data.concat(action.payload);
			return { ...state, loading: false, error };
		default:
			throw new Error('has-no-action');
	}
};

export const useRequest = <T, PromiseResponse>(
	request: (id: number, page?: number) => Promise<PromiseResponse>,
	props: { id: number; paginate?: boolean },
	filter: (response: PromiseResponse) => T[],
): [boolean, any, T[], () => void] => {
	const initialState: StateRequestReducer<T> = {
		loading: false,
		error: undefined,
		data: [],
		id: props.id,
		page: props.paginate ? 1 : undefined,
	};
	const [state, dispatch] = useReducer<ReducerRequest<T>>(reducerRequest, initialState);
	const nextPage = () => {
		if (!state.loading) {
			dispatch({ type: 'next' });
			request(state.id, state.page)
				.then(response => {
					dispatch({ type: 'success', payload: filter(response) });
				})
				.catch(error => {
					console.log({ error });
					dispatch({ type: 'fail', payload: error });
				});
		}
	};

	return [state.loading, state.error, state.data, nextPage];
};
