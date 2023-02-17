import React, { useEffect, useState } from "react";
import { propiedades } from "../../API/Rule_inmobiliaria";
import "../style.css";
import img from "../List/download.jpg";
import { Link } from "react-router-dom";

function List() {
  const [arrayPropyedades, setArrayPropiedades] = useState([]);
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
    <div className="list">
      {arrayPropyedades.map((propiedades) => {
        return (
          <div className="card">
            <img src={img} alt="" className="fotoPropiedad" />
            <label className="operacion">{propiedades.operacion}</label>
            <div className="infoCard">
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
        );
      })}
    </div>
  );
}

export default List;
