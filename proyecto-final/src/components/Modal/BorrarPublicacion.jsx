import React from "react";
import "./styleModal.css";

function BorrarPublicacion(props) {
  return (
    <div>
      <div className="contenedorBorrarPubli">
        <div className="borrarPubli">
          Borrar Publi
          <h3 onClick={props.cerrarBorrarPubli} className="cerrarModal">
            X
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BorrarPublicacion;
