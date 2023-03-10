import React, { useState } from "react";
import "./styleModal.css";

function FormModificarPublicacion(props) {
  const [operacion, setOperacion] = useState("");
  const [tipo_inmueble, setTipo_inmueble] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [barrio, setBarrio] = useState("");
  const [precio, setPrecio] = useState("");
  const [dormitorios, setDormitorios] = useState("");
  const [baños, setBaños] = useState("");
  const [metros_cuadrados, setMetros_cuadrados] = useState("");
  const [metro_edificio, setMetro_edificio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <div className="contenedorFormModificar">
      <h3 onClick={props.cerrarFormModificar} className="cerrarFormModificar">
        X
      </h3>

      <div className="contModificar">
        <form action="" className="formModificar">
          <select
            name="operacion"
            className="operacionModificar"
            onChange={(e) => setOperacion(e.target.value)}
          >
            <option value="" selected>
              Operacion
            </option>
            <option value="Alquila">Alquila</option>
            <option value="Venta">Venta</option>
          </select>
          <label>
            Tipo de inmueble: <br />
            <input
              name="tipo_inmueble"
              type="text"
              value={tipo_inmueble}
              onChange={(e) => setTipo_inmueble(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Departamento: <br />
            <input
              name="departamento"
              type="text"
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Barrio: <br />
            <input
              name="barrio"
              type="text"
              value={barrio}
              onChange={(e) => setBarrio(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Precio: <br />
            <input
              name="precio"
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Dormitorios: <br />
            <input
              name="dormitorios"
              type="number"
              value={dormitorios}
              onChange={(e) => setDormitorios(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Baños: <br />
            <input
              name="baños"
              type="number"
              value={baños}
              onChange={(e) => setBaños(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Metros del terreno: <br />
            <input
              name="metros_terreno"
              type="number"
              value={metros_cuadrados}
              onChange={(e) => setMetros_cuadrados(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Metros del edificio: <br />
            <input
              name="metros_edificio"
              type="number"
              value={metro_edificio}
              onChange={(e) => setMetro_edificio(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label className="imputFormModificarDescrip">
            Descripcion: <br />
            <input
              name="descripcion"
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </label>
          <button className="submitModificar">Agregar cambios</button>
        </form>
      </div>
    </div>
  );
}

export default FormModificarPublicacion;
