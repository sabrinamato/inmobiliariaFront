import React, { useState } from "react";

import "./styleBuscador.css";

function Buscador(props) {
  const [nombrePropiedades, setNombrePropiedades] = useState("");

  return (
    <>
      <div className="lineaSup"></div>
      <div className="searchBar">
        <select name="operacion" className="selectSearchBar">
          <option value="operacion" selected>
            Operacion
          </option>
          <option value="alqulier">Alquiler</option>
          <option value="venta">Venta</option>
          <option value="alquilerVenta">Alquiler y Venta</option>
        </select>

        <select name="departamento" className="departamento">
          <option value="departamento" selected>
            Departamento
          </option>
          <option value="montevideo">Montevideo</option>
          <option value="Canelones">Canelones</option>
          <option value="maldonado">Maldonado</option>
        </select>

        <select name="inmueble" className="inmueble">
          <option value="inmueble" selected>
            Tipo de inmueble
          </option>
          <option value="casa">Casa</option>
          <option value="apto">Apartamento</option>
          <option value="terrenos">Terrenos</option>
        </select>

        <select name="dormitorios" className="dormitorios">
          <option value="dormitorios" selected>
            Dormitorios
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="mas5">+5</option>
        </select>
      </div>
      <div className="lineaInf"></div>
    </>
  );
}

export default Buscador;
