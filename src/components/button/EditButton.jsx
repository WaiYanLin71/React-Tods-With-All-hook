import React from "react";

const EditButton = ({ children, btn = "", attribute, type }) => {
	return (
		<button
			{...attribute}
			type={type ? type : "button"}
			className={`btn btn-warning text-white ${btn}`}
		>
			{children}
		</button>
	);
};

export default EditButton;
