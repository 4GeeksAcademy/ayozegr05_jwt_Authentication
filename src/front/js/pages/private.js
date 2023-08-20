import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Wellcome; THANKS FOR LOGIN!!!!!</h1>
			
			<div className="alert alert-info">
				{store.message || "You are login in successfully"}
			</div>
			<p>
			 This is your tokeeeeeen: {store.token}
			</p>
		</div>
	);
};
