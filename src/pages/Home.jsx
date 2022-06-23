import React, { useContext, useEffect, useState } from "react";
import TodoCreateForm from "../components/Form/TodoCreateForm";
import Container from "../components/uility/Container";
import Card from "../components/uility/Card";
import axios from "axios";
import EditButton from "../components/button/EditButton";
import DeleteButton from "../components/button/DeleteButton";
import Context from "../store/Context";
import toast from "react-hot-toast";
import DeleteModal from "../components/modal/DeleteModal";
import EditModal from "../components/modal/EditModal";

const Home = () => {
	const { todos, dispatch } = useContext(Context);
	const [deleteModal, setDeleteModal] = useState(false);
	const [editId, setEditId] = useState(false);

	function deleteTask() {
		axios
			.delete(`http://127.0.0.1:8000/api/todos/${deleteModal}`)
			.then((res) => {
				dispatch({ type: "delete", id: deleteModal });
				toast(res.data, { className: "text-white bg-danger" });
				setDeleteModal(false);
			})
			.catch((error) => {});
	}


	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/todos")
			.then((res) => {
				dispatch({ type: "store", data: res.data.todos });
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<Container>
			{editId && <EditModal cancel={setEditId} id={editId}/>}
			{deleteModal && (
				<DeleteModal
					cancel={setDeleteModal}
					confirm={deleteTask}
				/>
			)}
			<div className='row justify-content-center mt-5'>
				<div className='col-md-6'>
					<h2 className='mb-3'>Todo Apps</h2>
					<Card>
						<TodoCreateForm />
					</Card>
				</div>
			</div>
			<div className='row justify-content-center mt-5'>
				<div className='col-md-6'>
					<h2 className=''>Your Task List</h2>
					<Card card='shadow-sm' cardBody='p-0'>
						<table className='table mb-0 table-striped'>
							<thead>
								<tr>
									<th>No</th>
									<th>Name</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{todos.map((todo, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{todo.name}</td>
											<td>
												<EditButton
													attribute={{
														id: todo.id,
														onClick: (e) => {
															setEditId(
																e.target.id
															);
														},
													}}
													btn='text-white mx-2'
												>
													Edit
												</EditButton>
												<DeleteButton
													attribute={{
														id: todo.id,
														onClick: (e) => {
															setDeleteModal(
																e.target.id
															);
														},
													}}
												>
													Delete
												</DeleteButton>
											</td>
										</tr>
									);
								})}
								{!todos.length && (
									<tr>
										<td colSpan='100%'>No Data</td>
									</tr>
								)}
							</tbody>
						</table>
					</Card>
				</div>
			</div>
		</Container>
	);
};

export default Home;
