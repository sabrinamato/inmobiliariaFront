import React from "react";

function ModificarPublicacion(props) {
  return (
    <div className="contenedorModificarPubli">
      <div className="modificarPubli">
        Modificar Publi
        <h3 onClick={props.cerrarModificarPubli} className="cerrarModal">
          X
        </h3>
      </div>
    </div>
  );
}

export default ModificarPublicacion;
