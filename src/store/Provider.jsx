import React, { useReducer } from "react";
import Context from "./Context";
import axios from "axios";

const Provider = ({ children }) => {
	const reducer = (state, action) => {
		switch (action.type) {
			case "create":
				axios
					.post("http://localhost:8000/api/todos", {
						name: action.data,
					})
					.then((res) => {
						console.log(res)
						// return [...state, res.data.todo];
					})
					.catch((err) => {
						console.log(err);
						return;
					});
				break;
			case "store" :
				return [...state,...action.data]
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, []);

	const data = {
		todos: state,
		create: (type, data) => {
			dispatch({ type, data });
		},
		delete: (type, data) => {
			dispatch({ type, data });
		},
		store:(type,data) => {
			dispatch({type,data});
		}
	};

	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
