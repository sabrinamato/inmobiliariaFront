import React, { useEffect, useState } from "react";
import { propiedades } from "../../API/Rule_inmobiliaria";
import "../style.css";
import img from "../List/download.jpg";
import { Link } from "react-router-dom";
import Detalle from "../Modal/Detalle";

function List() {
  const [arrayPropyedades, setArrayPropiedades] = useState([]);
  // const [flag, setFlag] = useState(false);

  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState({});

  const [detalleOpen, setDetalleOpen] = useState(false);

  const openDetalle = (propiedad) => {
    setDetalleOpen(!detalleOpen);
    setPropiedadSeleccionada(propiedad);
  };

  const getPropiedades = async () => {
    await propiedades().then((response) => {
      setArrayPropiedades(response);
    });
  };
  useEffect(() => {
    getPropiedades();
  });

  return (
    <div className="list">
      {arrayPropyedades.map((propiedad) => {
        return (
          <div key={propiedad.id}>
            <Link to={`propiedad/${propiedad.id}`}>
              <div className="card">
                <img src={img} alt="" className="fotoPropiedad" />
                <label className="operacion">{propiedad.operacion}</label>
                <div className="infoCard">
                  <p className="tipo">{propiedad.tipo_inmueble}</p>
                  <p className="departamento">{propiedad.departamento}</p>
                  <p className="barrio">{propiedad.barrio}</p>
                  <p className="dormitorios">
                    Dormitorios: {propiedad.dormitorios}
                  </p>
                  <p className="precio">U$S {propiedad.precio}</p>
                  <p></p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}

      {detalleOpen && (
        <Detalle
          cerraDetalle={openDetalle}
          propiedad={propiedadSeleccionada}
          cerrarDetalle={openDetalle}
        />
      )}
    </div>
  );
}

export default List;
