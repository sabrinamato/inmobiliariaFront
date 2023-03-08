//COMPONENTE DE REGISTRO DE NUEVO LOGIN//

import React from "react";
import "./LoginComp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../API/Rule_User";

function LoginComp() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const onChangeValueUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const onChangeValueContraseña = (e) => {
    setContraseña(e.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("mensaje", usuario, contraseña);
    await login({ email: usuario, contraseña: contraseña })
      .then((response) => {
        console.log("response", response);
        navigate("/home");
        // alert(response.token);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="div-contenedor">
        <form className="form">
          <h2 className="titulo"> INICIAR SESION </h2>
          <div className="div-form">
            <label className="label1" htmlFor="usuario"></label>
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
          <button onClick={handleSubmit} className="button">
            Ingresar
          </button>
          <Link to={"/register"}>
            <button className="registro">REGISTRARSE</button>
          </Link>
          <div className="contra-olvidada">
            {/* <a className="contra-olvidada" href="#" >  Olividaste tu contraseña? </a> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginComp;
