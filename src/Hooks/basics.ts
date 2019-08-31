import { useState as useStateReact, Dispatch, SetStateAction } from 'react';

export const useState = <T>(initialState: T): [T, Dispatch<SetStateAction<T>>] => {
	const [state, setState] = useStateReact<T>(initialState);
	const update: Dispatch<SetStateAction<T>> = newState => {
		if (state !== newState) {
			setState(newState);
		}
	};
	return [state, update];
};
