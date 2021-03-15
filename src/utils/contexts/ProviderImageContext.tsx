import { createContext, useReducer, FC } from "react";
import IMAGE_CONSTANT from "../constants/imageConstant";
import { DispatchType, ReducerActionType } from "../types/globals";

const initState = {
	search: "",
	data: [
		{
			link: "",
			media: {
				small: "",
				medium: "",
				large: "",
			},
			title: "",
			author: "",
			published: "",
			description: "",
			tags: "",
		},
	],
	isLoading: true,
};

type StateType = typeof initState;

const reducer = (state: StateType, action: ReducerActionType) => {
	switch (action.type) {
		case IMAGE_CONSTANT.SET_DATA_IMAGE:
			return { ...state, data: action.payload };
		case IMAGE_CONSTANT.SET_IS_LOADING:
			return { ...state, isLoading: action.payload };
		case IMAGE_CONSTANT.SET_SEARCH_IMAGE:
			return { ...state, search: action.payload };
		default:
			return state;
	}
};

interface ValueContext {
	state?: StateType;
}

export const ImageContext = createContext<ValueContext & DispatchType>(null);

const ProviderImage: FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);
	return (
		<ImageContext.Provider value={{ state, dispatch }}>
			{children}
		</ImageContext.Provider>
	);
};

export default ProviderImage;
