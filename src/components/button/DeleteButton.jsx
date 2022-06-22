import React from "react";

const DeleteButton = ({ name,btn }) => {
	return <button className={`btn btn-danger ${btn}`}>{name ? name : "Delete"}</button>;
};

export default DeleteButton;
