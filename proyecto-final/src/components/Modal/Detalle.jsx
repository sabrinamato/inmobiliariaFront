import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { propiedades } from "../../API/Rule_inmobiliaria";
import Header from "../Header/Header";
import "./styleModal.css";

function Modal() {
  const { id } = useParams();

  const [propiedad, setPropiedad] = useState([]);

  const getPropiedades = async () => {
    await propiedades().then((response) => {
      const propiedadFilter = response.filter(
        (propiedad) => propiedad.id == id
      );
      setPropiedad(propiedadFilter[0]);
    });
  };
  useEffect(() => {
    getPropiedades();
    // console.log(propiedad);
  });

  return (
    <div className="contenedorDetalle">
      <Header />
      <h1>{propiedad?.operacion}</h1>
      {/* <div className="detalle">
        <button className="btnClose" onClick={props.cerrarDetalle}>
          X
        </button>
        <div className="modalDetalle">
          <h3>{props.propiedad.id}</h3>

          <div className="infoDerecha">
            <ul>
              <li>{`${props.propiedad.operacion}`}</li>
          
            </ul>
          </div>
          <div className="fotoImg">
            <img src={`../img/${props.propiedad.foto}.png`} alt="foto" />
          </div>
        </div>
        <br />
        <div className="modalParrafo">
          <h3>Descripcion</h3>
          <p>{props.propiedad.descripcion}</p>
        </div>
        <div className="modalDetalle">
          <h3>Detalles</h3>
          <div className="containerDetalle">
            <label>Tipo Inmueble</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.TipoInmueble}
            ></input>
            <label>Departamento</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.departamento}
            ></input>
            <label>Barrio</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.barrio}
            ></input>
            <label>Precio</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.precio}
            ></input>
            <label>Dormitorios</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.dormitorios}
            ></input>
            <label>Baños</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.baño}
            ></input>
            <label>Metros Terreno</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.metrosTerreno}
            ></input>
            <label>Metros Edificio</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.metrosEdificio}
            ></input>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Modal;
