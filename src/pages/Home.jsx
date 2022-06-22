import React, { useContext, useEffect, useState } from "react";
import TodoCreateForm from "../components/todos/TodoCreateForm";
import Container from "../components/uility/Container";
import Card from "../components/uility/Card";
import axios from "axios";
import EdiButton from "../components/button/EdiButton";
import DeleteButton from "../components/button/DeleteButton";
import Context from "../store/Context";

const Home = () => {
	const { todos,store } = useContext(Context);
	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/todos")
			.then((res) => {
				console.log(res)
				// store('store',res.data.todos);
			})
			.catch((error) => {});
	}, []);
	return (
		<Container>
			<div className='row justify-content-center mt-5'>
				<div className='col-md-6'>
					<Card>
						<TodoCreateForm />
					</Card>
				</div>
			</div>
			<div className='row justify-content-center mt-5'>
				<div className='col-md-6'>
					<Card>
						<table className='table mb-0 table-striped'>
							<thead>
								<tr>
									<th>No</th>
									<th>Name</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{/* {todos.map((todo, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{todo.name}</td>
											<td>
												<EdiButton btn='text-white mx-2' />
												<DeleteButton />
											</td>
										</tr>
									);
								})} */}
							</tbody>
						</table>
					</Card>
				</div>
			</div>
		</Container>
	);
};

export default Home;
