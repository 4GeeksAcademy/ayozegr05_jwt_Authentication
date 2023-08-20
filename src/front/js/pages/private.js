import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Alert, Button, Modal } from "react-bootstrap";


export const Private = () => {
	const { store, actions } = useContext(Context);
    const [showModal, setShowModal] = useState(true); // Cambiado a true por defecto

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

	return (
		<div className="d-flex justify-content-center">
            {!store.token && showModal ? ( // Mostrar modal si no está logueado y showModal es true
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {/* Modal */}
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>ERROOOOOOR</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            You are not logged in. You do not have permission to view this page!!!
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                Close
                            </button>
                            <Link to="/login">
                                <button type="button" className="btn btn-primary">
                                    Login
                                </button>
                            </Link>
                        </Modal.Footer>
                    </Modal>
					 <div className="alert alert-danger" role="alert">
                        You are not logged in. You do not have permission to view this page!!!
                    </div>
					<h1 className="text-danger">ERROR</h1>
					<img src="http://images.mysecuritysign.com/img/lg/S/solamente-personal-autorizado-spanish-sign-s-6246.png" />
				</div>
			) : (
				<div className="text-center mt-5">
					<h1>Wellcome; THANKS FOR LOGIN!!!!!</h1>
					
					<div className="alert alert-info">
						{store.message || "You are login in successfully"}
					</div>
					<p>
					This is your tokeeeeeen: {store.token}
					</p>
				</div>
			)}
		</div>
	)
};
