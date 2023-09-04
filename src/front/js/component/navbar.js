import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					<Link to="/private">
						<button className="btn btn-primary ms-3">Private</button>
					</Link>
				</div>
				<div className="ml-auto">
					{!store.token ?
						(<div>
							<Link to="/login">
								<button className="btn btn-primary me-3">Log In</button>
							</Link>
							<Link to="/register">
								<button className="btn btn-primary">Register</button>
							</Link>
						</div>
					) : (
						<div>
							<Link to="/">
								<button onClick={()=> actions.logout()} className="btn btn-primary">Log Out</button>
							</Link>
							<Link to="/login">
								<button className="btn btn-primary ms-3">Log In</button>
							</Link>
						</div>
						)
					}
				</div>
			</div>
		</nav>
	);
};
