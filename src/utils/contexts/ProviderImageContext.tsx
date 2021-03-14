import React, { createContext, useReducer, FC } from "react";
const initState = {};

type StateType = typeof initState;

export type ReducerActionType = {
	type?: string;
	payload?: any;
};

const reducer = (state: StateType, action: ReducerActionType) => {
	switch (action.type) {
		default:
			return state;
	}
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Dispacth<A, D> = ({ type: A, payload: D }) => void;

interface ValueContext {
	state?: StateType;
	dispatch?: Dispacth<string, any>;
}

export const ImageContext = createContext<ValueContext>(null);

const ProviderImage: FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);
	return (
		<ImageContext.Provider value={{ state, dispatch }}>
			{children}
		</ImageContext.Provider>
	);
};

export default ProviderImage;
