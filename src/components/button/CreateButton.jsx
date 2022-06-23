import React from "react";

const CreateButton = ({ type, children }) => {
	return (
		<button type={type ? type : "button"} className='btn btn-success'>
			{children}
		</button>
	);
};

export default CreateButton;
