//COMPONENTE DE REGISTRO DE NUEVO USUARIO//

import React from "react";
import { useState } from "react";
import "./register.css";
// import { registrarUsuario } from "../API/rule_registrar";
import { Link } from "react-router-dom";

function Registro() {
  // VERIFICAR QUE ESTO ESTE CORRECTO//
  /*  const navigate = useNavigate(); */

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [email, setEmail] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const onChangeValueContraseña = (e) => {
    setContraseña(e.target.value);
  };

  const onChangeValueUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const onChangeValueEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeConfirmarContraseña = (e) => {
    setConfirmarContraseña(e.target.value);
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    console.log(e);

    const user = {
      username: usuario,
      contraseña: contraseña,
      email: email,
      confirmarContraseña: confirmarContraseña,
    };
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
            />
          </div>
          <div className="div-form4">
            <label className="label4" htmlFor="confirmar-contraseña"></label>
            <input
              className="input4"
              type="text"
              name="confirmar-contraseña"
              required
              placeholder="Confirmar Contraseña"
            />
          </div>
          {/* <Link to={"/login"} >  */}{" "}
          <button type="submit" className="but-registro">
            REGISTRAR
          </button>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
}

export default Registro;
