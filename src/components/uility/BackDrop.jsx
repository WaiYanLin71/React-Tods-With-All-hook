import React from "react";

const BackDrop = ({ children,backdrop }) => {
	return <div className='back-drop' onClick={(e)=>{
        if(e.currentTarget === e.target){
            backdrop(false);
        }
    }}>{children}</div>;
};

export default BackDrop;
