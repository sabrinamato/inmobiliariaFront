import React, { useState } from "react";
import { nuevaPubli } from "../../API/Rule_inmobiliaria";
import "./agregarPublicacion.css";

function AgregarPubli(props) {
  const [operacion, setOpreacion] = useState("");
  const [tipoInmueble, setTipoInmueble] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [barrio, setBarrio] = useState("");
  const [precio, setPrecio] = useState("");
  const [dormitorios, setDormitorios] = useState("");
  const [baños, setBaños] = useState("");
  const [metrosCuadrados, setMetrosCuadrados] = useState("");
  const [metroEdificio, setMetroEdificio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [foto, setFoto] = useState("");
  const [texto, setTexto] = useState("");

  const onSubmitPublicacion = async (e) => {
    console.log(publicacion);
    const publicacion = {
      operacion: operacion,
      tipoInmueble: tipoInmueble,
      departamento: departamento,
      barrio: barrio,
      precio: precio,
      dormitorios: dormitorios,
      baños: baños,
      metrosCuadrados: metrosCuadrados,
      metroEdificio: metroEdificio,
      descripcion: descripcion,
      foto: foto,
    };

    // if (e.target[11].checked) {
    //   e.preventDefault();
    // setTexto("Agregando nueva publicación");
    await nuevaPubli(publicacion)
      .then(() => {
        alert("Publicacion creada");

        // setTexto("Nueva publicación agregada exitosamente");
      })
      .catch((error) => {
        alert(error);
      });
    // }
  };
  const onChangeValueOperacion = (e) => {
    setOpreacion(e.target.value);
  };
  const onChangeValueTipoInmueble = (e) => {
    setTipoInmueble(e.target.value);
  };
  const onChangeValueDepartamento = (e) => {
    setDepartamento(e.target.value);
  };
  const onChangeValueBarrio = (e) => {
    setBarrio(e.target.value);
  };
  const onChangeValuePrecio = (e) => {
    setPrecio(e.target.value);
  };
  const onChangeValueDormitorios = (e) => {
    setDormitorios(e.target.value);
  };
  const onChangeValueBaños = (e) => {
    setBaños(e.target.value);
  };
  const onChangeValueMetrosCuadrados = (e) => {
    setMetrosCuadrados(e.target.value);
  };
  const onChangeValueMetrosEdificio = (e) => {
    setMetroEdificio(e.target.value);
  };
  const onChangeValueDescripcion = (e) => {
    setDescripcion(e.target.value);
  };
  const onChangeValueFoto = (e) => {
    setFoto(e.target.value);
  };
  return (
    <div className="contenedorAgregarPubli">
      <div className="agregarPubli">
        <h3 onClick={props.cerrarAgregarPubli} className="cerrarModal">
          X
        </h3>
        <div className="nuevaPublicacion">
          <form>
            <div className="formtDiv" onSubmit={onSubmitPublicacion}>
              <h2 className="titulo-registro">REGISTRAR</h2>
              <label className="formLabel" htmlFor="operacion"></label>
              <input
                className="formInput"
                onChange={onChangeValueOperacion}
                value={operacion}
                required
                placeholder="Operacion"
                type="text"
                name="operacion"
              />
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="tipoInmueble"></label>
              <input
                className="formInput"
                onChange={onChangeValueTipoInmueble}
                value={tipoInmueble}
                required
                placeholder="Tipo de Inmueble"
                type="text"
                name="tipoInmueble"
              />
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="departamento"></label>
              <input
                className="formInput"
                onChange={onChangeValueDepartamento}
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
                onChange={onChangeValueBarrio}
                value={barrio}
                required
                placeholder="Barrio"
                type="text"
                name="barrio"
              />
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="precio"></label>
              <input
                className="formInput"
                onChange={onChangeValuePrecio}
                value={precio}
                required
                placeholder="Precio"
                type="text"
                name="precio"
              />
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="dormitorios"></label>
              <input
                className="formInput"
                onChange={onChangeValueDormitorios}
                value={dormitorios}
                required
                placeholder="Dormitorios"
                type="text"
                name="dormitorios"
              />
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="baños"></label>
              <input
                className="formInput"
                onChange={onChangeValueBaños}
                value={baños}
                required
                placeholder="Baños"
                type="text"
                name="baños"
              />
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="metrosCuadrados"></label>
              <input
                className="formInput"
                onChange={onChangeValueMetrosCuadrados}
                value={metrosCuadrados}
                required
                placeholder="Metros Cuadrados"
                type="text"
                name="metrosCuadrados"
              />
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="metroEdificio"></label>
              <input
                className="formInput"
                onChange={onChangeValueMetrosEdificio}
                value={metroEdificio}
                required
                placeholder="Metro del Edificio"
                type="text"
                name="metroEdificio"
              />
            </div>
            <div className="formtDiv">
              <label className="formLabel" htmlFor="descripcion"></label>
              <input
                className="formInput"
                onChange={onChangeValueDescripcion}
                value={descripcion}
                required
                placeholder="Descripcion"
                type="text"
                name="descripcion"
              />
            </div>
            <div className="formDiv">
              <label className="formLabel" htmlFor="foto"></label>
              <input
                className="formInput-file"
                onChange={onChangeValueFoto}
                value={foto}
                required
                placeholder="Agregar foto"
                type="file"
                name="foto"
              />
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