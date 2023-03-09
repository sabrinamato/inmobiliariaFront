import React, { useEffect, useState } from "react";
import { propiedades } from "../../API/Rule_inmobiliaria";
import "./styleModal.css";
import { EditOutlined } from "@ant-design/icons";
import FormModificarPublicacion from "./FormModificarPublicacion";

function ModificarPublicacion(props) {
  const [formModificar, setFormModificar] = useState(false);
  const openFormModificar = () => {
    setFormModificar(!formModificar);
    console.log(formModificar);
  };

  const [arrayPropiedades, setArrayPropiedades] = useState([]);
  const [flag, setFlag] = useState(false);
  const getPropiedades = async () => {
    await propiedades().then((response) => {
      setArrayPropiedades(response);
    });
  };
  useEffect(() => {
    getPropiedades();
  }, [flag]);
  return (
    <div className="contenedorModificarPubli">
      <div className="modificarPubli">
        <h3 onClick={props.cerrarModificarPubli} className="cerrarModal">
          X
        </h3>
        {arrayPropiedades.map((propiedades) => {
          return (
            <div className="contenedorCardAdmin">
              <EditOutlined
                className="editarAdmin"
                onClick={openFormModificar}
              />
              <div className="cardAdmin">
                <label className="operacionAdmin">
                  {propiedades.operacion}
                </label>
                <img
                  src={propiedades.foto}
                  alt=""
                  className="fotoPropiedadAdm"
                />
                <div className="infoCardAdmin">
                  <p className="tipo">{propiedades.tipo_inmueble}</p>
                  <p className="departamento">{propiedades.departamento}</p>
                  <p className="barrio">{propiedades.barrio}</p>
                  <p className="dormitorios">
                    Dormitorios: {propiedades.dormitorios}
                  </p>
                  <p className="precio">U$S {propiedades.precio}</p>
                  <p></p>
                </div>
              </div>
            </div>
          );
        })}
        {formModificar && (
          <FormModificarPublicacion cerrarFormModificar={openFormModificar} />
        )}
      </div>
    </div>
  );
}

export default ModificarPublicacion;
