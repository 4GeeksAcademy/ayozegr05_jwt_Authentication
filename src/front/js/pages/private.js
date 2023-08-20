import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex justify-content-center">
			{!store.token ? (
				<div className="d-flex flex-column justify-content-center align-items-center">
					<div className="modal" tabindex="-1">
						<div className="modal-dialog">
							<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">ERROOOOOOR</h5>
							</div>
							<div className="modal-body">
								<p>You are not logged in. You do not have permission to view this page!!!</p>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<Link to="/login">
									<button type="button" className="btn btn-primary">Login</button>
								</Link>
							</div>
							</div>
						</div>
					</div>
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
