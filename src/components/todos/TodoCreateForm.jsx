import React, { useContext, useState } from "react";
import CreateButton from "../button/CreateButton";
import Context from "../../store/Context";

const TodoCreateForm = () => {
	const [input, setInput] = useState("");
	const { create } = useContext(Context);
	const createTodo = (e) => {
		e.preventDefault();
		create("create",input);
	};
	return (
		<form onSubmit={createTodo}>
			<div className='form-group'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					className='form-control mt-1'
					placeholder='Enter your Todo'
					onChange={(e)=>{ 
						setInput(e.target.value)
					}}
				/>
			</div>
			<div className='form-group mt-2 float-end'>
				<CreateButton name='Create' type='submit' />
			</div>
		</form>
	);
};

export default TodoCreateForm;
