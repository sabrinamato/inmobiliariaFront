/* import React, { useState } from 'react'
import {nuevaPublicacion} from '../API/rule_crearPublicacion'

function agregarPublicacion() {

    const [id, setId] = useState("");
    const [operacion, setOpreacion] = useState("");
    const [tipoInmueble, setTipoInmueble] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [barrio, setBarrio] = useState("");
    const [precio, setPrecio] = useState("");
    const [dormitorios, setDormitorios] = useState("");
    const [banios, setBanios] = useState("");
    const [metrosCuadrados, setMetrosCuadrados] = useState("");
    const [metroEdificio, setMetroEdificio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [foto, setFoto] = useState("");

  
  
  
    return (
        <div className ="nuevaPublicacion">
        <form className = "formSubmit" onSubmit={} >
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="id">id:</label>
            <input className = "formInput" onChange={onChangeValueId} value={id} required placeholder = "id" type ="text" name="id"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="nombre">Nombre:</label>
            <input className = "formInput" onChange={onChangeValueNombre} value={nombre} required placeholder = "Nombre"type ="text" name="nombre"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="especialidad">Especialidad:</label>
            <input className = "formInput" onChange={onChangeValueEspecialidad} value={especialidad} required placeholder = "Especialidad"type ="text" name="especalidad"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="edad">Edad:</label>
            <input className = "formInput" onChange={onChangeValueEdad} value={edad} required placeholder = "Edad"type ="text" name="edad"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="altura">Altura:</label>
            <input className = "formInput" onChange={onChangeValueAltura} value={altura} required placeholder = "Altura"type ="text" name="altura"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="peso">Peso:</label>
            <input className = "formInput" onChange={onChangeValuePeso} value={peso} required placeholder = "Peso"type ="text" name="peso"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="nacionalidad">Nacionalidad:</label>
            <input className = "formInput" onChange={onChangeValueNacionalidad} value={nacionalidad} required placeholder = "Nacionalidad"type ="text" name="nacionalidad"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="record_personal">Record Personal:</label>
            <input className = "formInput" onChange={onChangeValueRecord} value={record} required placeholder = "Record Personal"type ="text" name="record_personal"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="descripcion">Descripcion:</label>
            <input className = "formInput" onChange={onChangeValueDescripcion} value={descripcion} required placeholder = "Descripcion"type ="text" name="descripcion"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="energia">Energia:</label>
            <input className = "formInput" onChange={onChangeValueEnergia} value={energia} required placeholder = "Energia"type ="text" name="energia"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="fuerza">Fuerza:</label>
            <input className = "formInput" onChange={onChangeValueFuerza} value={fuerza} required placeholder = "Fuerza"type ="text" name="fuerza"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="resistencia">Resistencia:</label>
            <input className = "formInput" onChange={onChangeValueResistencia} value={resistencia} required placeholder = "Resistencia"type ="text" name="resistencia"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="agilidad">Agilidad:</label>
            <input className = "formInput" onChange={onChangeValueAgilidad} value={agilidad} required placeholder = "Agilidad"type ="text" name="agilidad"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="lesiones">Lesiones:</label>
            <input className = "formInput" onChange={onChangeValueLesiones} value={lesiones} required placeholder = "Lesiones"type ="text" name="lesiones"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="dedicacion">Dedicacion:</label>
            <input className = "formInput" onChange={onChangeValueDedicacion} value={dedicacion} required placeholder = "Dedicacion"type ="text" name="dedicacion"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="profesionalsmo">Profesionalismo:</label>
            <input className = "formInput" onChange={onChangeValueProfesionalismo} value={profesionalismo} required placeholder = "Profesionalismo"type ="text" name="profesionalismo"/></div>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="image">Imagen:</label>
            <input className = "formInput" onChange={onChangeValueImagen} value={imagen} required placeholder = "Imagen"type ="text" name="image"/></div>
            <div className ="formSubmitDiv"><label className ="formLabel" htmlFor="tipo">Crear Nuevo</label>
            <input className ="" type="radio" name="Update or Create" value='Crear'/>
            <label className ="formLabel" htmlFor="tipo">Hacer update</label>
            <input className ="" type="radio" name="Update or Create" value='Update'/>
              </div>
            <button id="btn-neon" type="submit" name="crear" value="crear">
                Submit
            </button>
            </form>
            </div>
  )
}

export default agregarPublicacion */