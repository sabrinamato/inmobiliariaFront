//COMPONENTE DE REGISTRO DE NUEVO USUARIO//

import React from "react";
import { useState } from "react";
import "./register.css";
// import { registrarUsuario } from "../API/rule_registrar";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../API/Rule_User";

function Registro() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [email, setEmail] = useState("");
  // const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const onChangeValueContraseña = (e) => {
    setContraseña(e.target.value);
  };

  const onChangeValueUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const onChangeValueEmail = (e) => {
    setEmail(e.target.value);
  };

  // const onChangeConfirmarContraseña = (e) => {
  //   setConfirmarContraseña(e.target.value);
  // };

  const onSubmitRegister = async (e) => {
    const user = {
      usuario: usuario,
      contraseña: contraseña,
      email: email,
      // confirmarContraseña: confirmarContraseña,
    };

    e.preventDefault();
    await registerUser(user)
      .then(() => {
        navigate("/home");
        alert("Usuario creado correctamente");
      })
      .catch((error) => {
        alert(error);
      });

    // registrarUsuario(user).then((response) => {});
  };

  return (
    <>
      <div className="div-general">
        <form className="form-registro">
          <h2 className="titulo"> Crear nuevo usuario </h2>
          <div className="div-form1">
            <label className="labe1" htmlFor="usuario"></label>
            <input
              className="input1"
              type="text"
              name="Usuario"
              required
              placeholder="Usuario"
              onChange={onChangeValueUsuario}
            />
          </div>
          <div className="div-form2">
            <label className="label2" htmlFor="email"></label>
            <input
              className="input2"
              type="text"
              name="Email"
              required
              placeholder="Email"
              onChange={onChangeValueEmail}
            />
          </div>
          <div className="div-form3">
            <label className="label3" htmlFor="contraseña"></label>
            <input
              className="input3"
              type="text"
              name="Contraseña"
              required
              placeholder="Contraseña"
              onChange={onChangeValueContraseña}
            />
          </div>
          {/* <div className="div-form4">
            <label className="label4" htmlFor="confirmar-contraseña"></label>
            <input
              className="input4"
              type="text"
              name="confirmar-contraseña"
              required
              placeholder="Confirmar Contraseña"
            />
          </div> */}
          <button
            type="submit"
            className="but-registro"
            onClick={onSubmitRegister}
          >
            REGISTRAR
          </button>
        </form>
      </div>
    </>
  );
}

export default Registro;
