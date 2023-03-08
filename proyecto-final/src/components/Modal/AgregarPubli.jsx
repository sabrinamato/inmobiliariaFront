import React, { useState } from "react";
import "./styleModal.css";

function AgregarPubli(props) {
  return (
    <div className="contenedorAgregarPubli">
      <div className="agregarPubli">
        <h3 onClick={props.cerrarAgregarPubli} className="cerrarModal">
          X
        </h3>
      </div>
    </div>
  );
}

export default AgregarPubli;
