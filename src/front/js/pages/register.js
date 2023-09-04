import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


const Register = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate()


  const handleRegister = async  () => {
    await  actions.register(email, password);
    navigate("/login");
}

  return (
    <div className="text-center mt-5">
      <h1>Register</h1>
      <div>
        <label className="me-3">Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label className="me-3 mt-3">Contraseña:</label>
        <input className="me-5" type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label className="mt-3 me-3">Active: </label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
      </div>
      
      <button className="btn btn-dark ms-5 mt-3" onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Register;