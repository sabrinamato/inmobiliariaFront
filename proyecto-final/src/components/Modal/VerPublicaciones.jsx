import React, { useState } from "react";
import "./styleModal.css";

function VerPublicaciones(props) {
  return (
    <div className="contenedorVerPubli">
      <div className="verPubli">
        <button onClick={props.cerrarVerPubli} className="cerrarVerPubli">
          X
        </button>
        <h1>Publicaciones</h1>
      </div>
    </div>
  );
}

export default VerPublicaciones;
