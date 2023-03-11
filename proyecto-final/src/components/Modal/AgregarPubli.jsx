import React, { useState } from "react";
import { addFoto, nuevaPubli } from "../../API/Rule_inmobiliaria";
// import { addFoto } from "../../API/Rule_inmobiliaria";
import "./agregarPublicacion.css";

function AgregarPubli(props) {
  const [operacion, setOpreacion] = useState("");
  const [tipo_inmueble, setTipo_inmueble] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [barrio, setBarrio] = useState("");
  const [precio, setPrecio] = useState("");
  const [dormitorios, setDormitorios] = useState("");
  const [baños, setBaños] = useState("");
  const [metros_terreno, setMetrosTerreno] = useState("");
  const [metros_edificio, setMetros_edificio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [foto, setFoto] = useState("");

  const [file, setFile] = useState({
    data: {
      name: "",
    },
  });

  const nuevaPublicacion = async (publicacion) => {
    await nuevaPubli(publicacion).then(() => {
      alert("Publicacion agregada");
    });
  };

  const descargarFoto = async (file) => {
    await addFoto(file).then((response) => {
      console.log(response);
    });
  };

  const onSubmitPublicacion = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("operacion", operacion);
    formData.append("tipo_inmueble", tipo_inmueble);
    formData.append("departamento", departamento);
    formData.append("barrio", barrio);
    formData.append("precio", precio);
    formData.append("dormitorios", dormitorios);
    formData.append("baños", baños);
    formData.append("metros_terreno", metros_terreno);
    formData.append("metros_edificio", metros_edificio);
    formData.append("descripcion", descripcion);
    formData.append("foto", file.data.name);

    const publicacion = {
      operacion,
      tipo_inmueble,
      departamento,
      barrio,
      precio,
      dormitorios,
      baños,
      metros_terreno,
      metros_edificio,
      descripcion,
      foto,
    };
    nuevaPublicacion(publicacion);
    descargarFoto(file);
  };

  const onChangeValueFoto = (e) => {
    console.log(e.target.files[0]);
    const image = {
      data: e.target.files[0],
    };
    setFile(image);
    console.log(file.name);
  };
  return (
    <div className="contenedorAgregarPubli">
      <div className="agregarPubli">
        <h3 onClick={props.cerrarAgregarPubli} className="cerrarModal">
          X
        </h3>
        <div className="nuevaPublicacion">
          <form onSubmit={onSubmitPublicacion}>
            <div className="formtDiv">
              <h2 className="titulo-registro">REGISTRAR</h2>
              <label className="formLabel" htmlFor="operacion">
                <input
                  className="formInput"
                  onChange={(e) => setOpreacion(e.target.value)}
                  value={operacion}
                  required
                  placeholder="Operacion"
                  type="text"
                  name="operacion"
                />
              </label>
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="tipoInmueble">
                <input
                  className="formInput"
                  onChange={(e) => setTipo_inmueble(e.target.value)}
                  value={tipo_inmueble}
                  required
                  placeholder="Tipo de Inmueble"
                  type="text"
                  name="tipoInmueble"
                />
              </label>
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="departamento"></label>
              <input
                className="formInput"
                onChange={(e) => setDepartamento(e.target.value)}
                value={departamento}
                required
                placeholder="Departamento"
                type="text"
                name="departamento"
              />
            </div>

            <div className="formtDiv">
              <label className="formLabel" htmlFor="barrio"></label>
              <input
                className="formInput"
                onChange={(e) => setBarrio(e.target.value)}
                value={barrio}
                required
                placeholder="Barrio"
                type="text"
                name="barrio"
              />
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="precio">
                <input
                  className="formInput"
                  onChange={(e) => setPrecio(e.target.value)}
                  value={precio}
                  required
                  placeholder="Precio"
                  type="text"
                  name="precio"
                />
              </label>
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="dormitorios">
                <input
                  className="formInput"
                  onChange={(e) => setDormitorios(e.target.value)}
                  value={dormitorios}
                  required
                  placeholder="Dormitorios"
                  type="text"
                  name="dormitorios"
                />
              </label>
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="baños">
                <input
                  className="formInput"
                  onChange={(e) => setBaños(e.target.value)}
                  value={baños}
                  required
                  placeholder="Baños"
                  type="text"
                  name="baños"
                />
              </label>
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="metrosCuadrados">
                <input
                  className="formInput"
                  onChange={(e) => setMetrosTerreno(e.target.value)}
                  value={metros_terreno}
                  required
                  placeholder="Metros Cuadrados"
                  type="text"
                  name="metrosCuadrados"
                />
              </label>
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="metroEdificio">
                <input
                  className="formInput"
                  onChange={(e) => setMetros_edificio(e.target.value)}
                  value={metros_edificio}
                  required
                  placeholder="Metro del Edificio"
                  type="text"
                  name="metroEdificio"
                />
              </label>
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="descripcion">
                <input
                  className="formInput"
                  onChange={(e) => setDescripcion(e.target.value)}
                  value={descripcion}
                  required
                  placeholder="Descripcion"
                  type="text"
                  name="descripcion"
                />
              </label>
            </div>
            <div className="formDiv">
              <label className="formLabel">
                <input
                  className="formInput-file"
                  onChange={onChangeValueFoto}
                  value={file.name}
                  required
                  placeholder="Agregar foto"
                  type="file"
                  name="foto"
                  // accept=".png,.jpg"
                />
              </label>
            </div>

            <button id="boton" type="submit" name="crear" value="crear">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgregarPubli;
