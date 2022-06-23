import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import Context from "../../store/Context";
import CancelButton from "../button/CancelButton";
import EditButton from "../button/EditButton";
import BackDrop from "../uility/BackDrop";
import Card from "../uility/Card";

const Modal = ({ cancel, id }) => {
	let [editData, setEditData] = useState("");
	let { todos,dispatch } = useContext(Context);

	useEffect(() => {
		setEditData((pre) => {
			let data = todos.find((todo) => Number(todo.id) === Number(id));
			return data.name;
		});
	}, [id]);

	const editTask = () => {
		axios.put("http://127.0.0.1:8000/api/todos/" + id, {
			name: editData,
		}).then(res => {
			dispatch({type:'update',data:res.data.todos})
			setEditData('');
			toast.success('Updated Successfully')
			cancel(false);
		})
		.catch(error => {
			console.log(error)
		});
	};

	return (
		<BackDrop backdrop={cancel}>
			<div className='w-50 mx-auto mt-5'>
				<Card>
					<form
						autoComplete='off'
						onSubmit={(e) => {
							e.preventDefault();
							editTask();
						}}
					>
						<h2 className='mb-2'>Edit Your Task</h2>
						<div className='form-floating'>
							<input
								id='floatingInput'
								type='text'
								value={editData}
								className='form-control mt-1'
								placeholder='Enter your Todo'
								onChange={(e) => {
									setEditData(e.target.value)
								}}
							/>
							<label htmlFor='floatingInput'>
								Enter Your Task
							</label>
						</div>
						<div className='form-group mt-2 float-end'>
							<CancelButton cancel={cancel}>Cancel</CancelButton>
							<span className='mx-1'></span>
							<EditButton type='submit'>Edit</EditButton>
						</div>
					</form>
				</Card>
			</div>
		</BackDrop>
	);
};

const EditModal = ({ cancel, id }) => {
	return createPortal(
		<Modal cancel={cancel} id={id} />,
		document.getElementById("modal")
	);
};

export default EditModal;
