import React from "react";

const EdiButton = ({ name,btn }) => {
	return <button className={`btn btn-warning ${btn}`}>{name ? name : "Edit"}</button>;
};

export default EdiButton;
