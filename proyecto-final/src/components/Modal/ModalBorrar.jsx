import React from "react";
import { deleteProp } from "../../API/Rule_inmobiliaria";
import "./styleModal.css";

function ModalBorrar(props) {
  const id = props.propiedad.id;

  const borrarProp = async () => {
    await deleteProp(id)
      .then(() => {
        alert("Propiedad eliminada correctamente");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="contenedorModalBorrar">
      <div className="modalBorrar">
        <h4> Desea eliminar la publicacion? </h4>
        <br />
        <div className="buttonBorrar">
          <button className="btnBorrarPubli" onClick={borrarProp}>
            SI
          </button>
          <button className="btnBorrarPubli" onClick={props.cerrarModalBorrar}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalBorrar;
