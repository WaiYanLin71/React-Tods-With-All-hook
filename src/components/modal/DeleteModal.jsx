import React from "react";
import { createPortal } from "react-dom";
import CancelButton from "../button/CancelButton";
import DeleteButton from "../button/DeleteButton";
import BackDrop from "../uility/BackDrop";
import Card from "../uility/Card";
import "./modal.css";

const Modal = ({ cancel, confirm }) => {
	return (
		<BackDrop backdrop="cancel">
			<div className='delete-modal'>
				<Card>
					<div className='bg-white'>Are You Want To Delete?</div>
					<div className='d-flex justify-content-end mt-3'>
						<CancelButton cancel={cancel}>cancel</CancelButton>
						<DeleteButton btn='mx-2' confirm={confirm}>
							Yes
						</DeleteButton>
					</div>
				</Card>
			</div>
		</BackDrop>
	);
};

const DeleteModal = ({ cancel, confirm }) => {
	return createPortal(
		<Modal cancel={cancel} confirm={confirm} />,
		document.getElementById("modal")
	);
};

export default DeleteModal;
