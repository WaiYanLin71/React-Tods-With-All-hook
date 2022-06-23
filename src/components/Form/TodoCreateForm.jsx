import React, { useContext, useState } from "react";
import CreateButton from "../button/CreateButton";
import Context from "../../store/Context";
import axios from "axios";
import toast from "react-hot-toast";

const notify = () =>
	toast("Created Successfully", {
		duration: 2500,
		position: "top-center",
		// Styling
		style: {},
		className: "bg-success text-white",
		// Custom Icon
		icon: "👏",
		// Change colors of success/error/loading icon
		iconTheme: {
			primary: "#fff",
			secondary: "#198754",
		},
		// Aria
		ariaProps: {
			role: "status",
			"aria-live": "polite",
		},
	});



const TodoCreateForm = () => {
	const [input, setInput] = useState("");
	const { dispatch } = useContext(Context);
	// const [error, setError] = useState("");

	// const inputRegex = (v) => {
	// 	let regex = /^(?=.*[a-z])(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{5,20}$/;
	// 	if (!regex.test(v)) {
	// 		setError('example: h@w12')
	// 		return
	// 	}
	// 	setError('');
	// };

	const createTodo = (e) => {
		e.preventDefault();
		axios
			.post("http://127.0.0.1:8000/api/todos", {
				name: input,
			})
			.then((res) => {
				dispatch({ type: "create", data: res.data.todos });
				setInput("");
				notify();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<form onSubmit={createTodo} autoComplete='off'>
			<div className='form-floating'>
				<input
					id='floatingInput'
					type='text'
					value={input}
					className='form-control mt-1'
					placeholder='Enter your Todo'
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
				<label htmlFor='floatingInput'>Enter Your Task</label>
			</div>
		    <div className="form-group mt-2">
			{/* <span className="text-danger">{error}</span> */}
			{/* {!error && <span className="text-success">Success</span>} */}
			</div>
			<div className='form-group mt-2 float-end'>
				<CreateButton type='submit'>Create</CreateButton>
			</div>
		</form>
	);
};

export default TodoCreateForm;
