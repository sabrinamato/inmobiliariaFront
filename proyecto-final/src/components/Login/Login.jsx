//COMPONENTE DE REGISTRO DE NUEVO LOGIN//

import React from "react";
import "./LoginComp.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginComp() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const onChangeValueUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const onChangeValueContraseña = (e) => {
    setContraseña(e.target.value);
  };

  /*      const navigate = useNavigate();
        function iraHome() {
            navigate('/home')
        } 
        
        function formRegistrar() {
            navigate('/registro')
        } 
     */

  return (
    <>
      <div className="div-contenedor">
        <form className="form">
          <h2 className="titulo"> INICIAR SESION </h2>
          <div className="div-form">
            <label className="label1" htmlFor="usuario">
              {" "}
            </label>
            <input
              className="input1"
              type="text"
              name="Usuario"
              required
              placeholder="Ingrese su usuario"
              onChange={onChangeValueUsuario}
            />
          </div>
          <div className="div-form2">
            <label className="label2" htmlFor="password"></label>
            <input
              className="input2"
              type="password"
              name="Password"
              required
              placeholder="Ingrese su contraseña"
              onChange={onChangeValueContraseña}
            />
          </div>
          <Link to={"/home"}>
            <button /* onClick={} */ className="button"> Ingresar </button>
          </Link>
          {/* <Link to={"/registro"}> */}
          <button /* onClick={} */ className="registro">REGISTRARSE</button>
          {/* </Link> */}
          <div className="contra-olvidada">
            {/* <a className="contra-olvidada" href="#" >  Olividaste tu contraseña? </a> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginComp;
