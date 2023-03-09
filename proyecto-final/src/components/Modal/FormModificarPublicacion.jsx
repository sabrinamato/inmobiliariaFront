import React from "react";
import "./styleModal.css";

function FormModificarPublicacion(props) {
  return (
    <div className="contenedorFormModificar">
      <h3 onClick={props.cerrarFormModificar} className="cerrarFormModificar">
        X
      </h3>
      <div className="formModificar"> FormModificarPublicacion </div>
    </div>
  );
}

export default FormModificarPublicacion;
