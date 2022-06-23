import React, { useReducer } from "react";
import Context from "./Context";
import { Toaster } from "react-hot-toast";
const Provider = ({ children }) => {
	const reducer = (state, action) => {
		switch (action.type) {
			case "store":
				return [...action.data];
			case "create":
				return [...state, action.data];
			case "delete":
				return state.filter(
					(data) => Number(data.id) !== Number(action.id)
				);
			case "update":
				return state.map((data) => {
					if (Number(data.id) === Number(action.data.id)) {
						return { ...data, name: action.data.name };
					}
					return data;
				});
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, []);

	const data = {
		todos: state,
		dispatch: (action) => {
			dispatch(action);
		},
	};

	return (
		<Context.Provider value={data}>
			<Toaster />
			{children}
		</Context.Provider>
	);
};

export default Provider;
