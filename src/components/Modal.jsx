import React from "react";
import "./Modal.css";
export default function Modal({ closeModal }) {
	return (
		<div className="modal-overlay">
			<div className="modal">
				<h1>Modal Loaded</h1>
				<button onClick={closeModal}>Close</button>
			</div>
		</div>
	);
}
