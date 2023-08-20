import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");    
    const [password, setPassword] = useState("");
    // const token = localStorage.getItem("token");
    console.log("This is your token", store.token);
    const navigate = useNavigate()
    
    const handleClick = async  () => {
        await  actions.login(email, password);
        // const newToken = localStorage.getItem("token");
        
        // // Si el token existe, redirige a la ruta /private
        // if (newToken && newToken !== "" && newToken !== undefined) {
        //     navigate("/"); // Redirige utilizando navigate
        // }
        if(store.token && store.token != "" && store.token != undefined)  navigate("/");
    }
    

	return (
		<div className="text-center mt-5">
			<h1>LOGIN</h1>
            {(store.token && store.token != "" && store.token != undefined) ? "you are logged in with this token: " + store.token : 
                <div className="mt-5">
                    <div className="d-flex justify-content-center">
                        <label className="me-3">Email address</label>
                        <input type="text" placeholder="write your email..." onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div >
                        <label className="me-3 mt-3">Password</label>
                        <input className="ms-4" type="password" placeholder="write your password..."onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-dark mt-3" onClick={handleClick}>Login</button>
                </div>
            }
		</div>
	)
};
