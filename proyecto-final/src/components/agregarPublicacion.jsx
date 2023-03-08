import React from 'react'
import {nuevaPubli} from '../API/rule_nuevaPubli'
import { useState } from 'react';

function AgregarPublicacion() {


    
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
    const [texto, setTexto] = useState("")

    const onSubmitPublicacion = (e) => {
        e.preventDefault();
        const publicacion = {  operacion: operacion, tipoInmueble:tipoInmueble, departamento:departamento,
        barrio:barrio, precio:precio, dormitorios:dormitorios, baños:baños, metrosCuadrados:metrosCuadrados, metroEdificio:metroEdificio,
        descripcion:descripcion, foto:foto, }
        if (e.target[11].checked){
          setTexto('Agregando nueva publicación')
          nuevaPubli(publicacion).then((response) => {
            setTexto('Nueva publicación agregada exitosamente');
          })
        }
        
    }
    const onChangeValueOperacion = (e) => {
        setOpreacion(e.target.value);
      };
      const onChangeValueTipoInmueble = (e) => {
        setTipoInmueble(e.target.value);
      };
      const onChangeValueDepartamento= (e) => {
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
        <>
            <div className="nuevaPublicacion">
                <form  >

                
                    <div className="formtDiv" onSubmit={onSubmitPublicacion}>
                        <label className="formLabel" htmlFor="operacion"></label>
                        <input className="formInput" onChange={onChangeValueOperacion}  value={tipoInmueble}  required placeholder="Operacion" type="text" name="operacion" />
                    </div>
                    <div className="formtDiv">
                        <label className="formLabel" htmlFor="tipoInmueble"></label>
                        <input className="formInput"  onChange={onChangeValueTipoInmueble}  value={departamento} required placeholder="Tipo de Inmueble" type="text" name="tipoInmueble" />
                    </div>
                    <div className="formtDiv">
                        <label className="formLabel" htmlFor="departamento"></label>
                        <input className="formInput"  onChange={onChangeValueDepartamento}  value={barrio}  required placeholder="Departamento" type="text" name="departamento" />
                    </div>

                    <div className="formtDiv">
                        <label className="formLabel" htmlFor="barrio"></label>
                        <input className="formInput"  onChange={onChangeValueBarrio} value={precio} required placeholder="Barrio" type="text" name="barrio" />
                    </div>
                    <div className="formtDiv">
                        <label className="formLabel" htmlFor="precio"></label>
                        <input className="formInput"  onChange={onChangeValuePrecio} value={dormitorios}  required placeholder="Precio" type="text" name="precio" />
                    </div>
                    <div className="formtDiv">
                        <label className="formLabel" htmlFor="dormitorios"></label>
                        <input className="formInput"  onChange={onChangeValueDormitorios} value={baños}   required placeholder="Dormitorios" type="text" name="dormitorios" />
                    </div>
                    <div className="formtDiv">
                        <label className="formLabel" htmlFor="baños"></label>
                        <input className="formInput"  onChange={onChangeValueBaños} value={metrosCuadrados}  required placeholder="Baños" type="text" name="baños" />
                    </div>
                    <div className="formtDiv">
                        <label className="formLabel" htmlFor="metrosCuadrados"></label>
                        <input className="formInput"  onChange={onChangeValueMetrosCuadrados } value={metroEdificio} required placeholder="Metros Cuadrados" type="text" name="metrosCuadrados" />
                    </div>
                    <div className="formtDiv">
                        <label className="formLabel" htmlFor="metroEdificio"></label>
                        <input className="formInput"  onChange={onChangeValueMetrosEdificio} value={descripcion}  required placeholder="Metro del Edificio" type="text" name="metroEdificio" />
                    </div>
                    <div className="formtDiv">
                        <label className="formLabel" htmlFor="descripcion"></label>
                        <input className="formInput"  onChange={onChangeValueDescripcion} value={descripcion}  required placeholder="Descripcion" type="text" name="descripcion" />
                    </div>
                    <div className="formDiv">
                        <label className="formLabel" htmlFor="foto"></label>
                        <input className="formInput"  onChange={onChangeValueFoto} value={foto}  required placeholder="Agregar foto" type="file" name="foto" />
                    </div>

                    <button id="boton" type="submit" name="crear" value="crear">
                        Agregar
                    </button>
                </form>
            </div>
        </>
    )
}

export default AgregarPublicacion
