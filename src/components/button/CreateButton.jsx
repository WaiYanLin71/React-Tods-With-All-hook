import React from "react";

const CreateButton = ({name,type}) => {
	return <button type={type ? type : 'button'} className='btn btn-success'>{name ? name : "Submit"}</button>;
};

export default CreateButton;
