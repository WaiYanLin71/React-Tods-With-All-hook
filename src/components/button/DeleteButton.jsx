import React from "react";

const DeleteButton = ({ children, btn = "", attribute, confirm }) => {
	return (
		<button
			onClick={confirm}
			{...attribute}
			className={`btn btn-danger ${btn}`}
		>
			{children}
		</button>
	);
};

export default DeleteButton;
