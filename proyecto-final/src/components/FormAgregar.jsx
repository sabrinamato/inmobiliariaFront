import React, { useEffect, useState } from "react";
import { nuevaPropiedad } from "../api/Rule_Inmobiliaria";

import "./styleForms.css";

function FormAgregar() {

    // const [arrayPropiedades, setArrayPropiedades] = useState([]);
    const [id, setId] = useState(0);
    const [operacion, setOperacion] = useState("");
    const [tipoInmueble, setTipoInmueble] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [barrio, setBarrio] = useState("");
    const [precio, setPrecio] = useState(0);
    const [dormitorios, setDormitorios] = useState("");
    const [baño, setBaño] = useState("");
    const [metrosTerreno, setMetrosTerreno] = useState(0);
    const [metrosEdificio, setMetrosEdificio] = useState(0);
    const [descripcion, setDescripcion] = useState("")
    const [foto, setFoto] = useState("");;
    const [errMsg, setErrMsg] = useState("");

    const handleSubmitNuevoDeportista = async (e) => {
        e.preventDefault();
        try {
            const response = await nuevoDeportista({
                id: id,
                operacion: operacion,
                tipoInmueble: tipoInmueble,
                departamento: departamento,
                barrio: barrio,
                precio: precio,
                dormitorios: dormitorios,
                baño: baño,
                metrosTerreno: metrosTerreno,
                metrosEdificio: metrosEdificio,
                descripcion: descripcion,
                foto: foto
              
            });
            setId(0);
            setOperacion("");
            setTipoInmueble("");
            setDepartamento("");
            setBarrio("");
            setPrecio(0);
            setDormitorios(0);
            setBaño("");
            setMetrosTerreno(0);
            setMetrosEdificio(0);
            setDescripcion("");
            setFoto();
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } else {
                setErrMsg("Registration Failed");
            }
        }
    };

    useEffect(() => {
        setErrMsg("");
    }, []);

    return (

        <div className="Main">
            <h1>Agregar Propiedad</h1>
            <form onSubmit={handleSubmitNuevoDeportista}>
                <label htmlFor="id">
                     ID:
                </label>
                <input className="inputForm"
                    type="numeric"
                    id="id"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                    required
                />
                {/* <label htmlFor="estadisticaid">
                    Estadistica ID:
                </label>
                <input className="inputForm"
                    type="numeric"
                    id="estadisticaid"
                    onChange={(e) => setEstadistica_id(e.target.value)}
                    value={estadistica_id}
                    required
                /> */}
                <label htmlFor="operacion">
                    Operacion:
                </label>
                <input className="inputForm"
                    type="text"
                    id="operacion"
                    onChange={(e) => setOperacion(e.target.value)}
                    value={nombre}
                    required
                />
                <label htmlFor="tipo inmueble">
                    Tipo inmueble:
                </label>
                <input className="inputForm"
                    type="text"
                    id="tipoInmueble"
                    onChange={(e) => setTipoInmueble(e.target.value)}
                    value={tipoInmueble}
                    required
                />
                <label htmlFor="departamento">
                    departamento:
                </label>
                <input className="inputForm"
                    type="text"
                    id="departamento"
                    onChange={(e) => setDepartamento(e.target.value)}
                    value={departamento}
                    required
                />
                <label htmlFor="barrio">
                    Barrio:
                </label>
                <input className="inputForm"
                    type="text"
                    id="barrio"
                    onChange={(e) => setBarrio(e.target.value)}
                    value={barrio}
                    required
                />
                <label htmlFor="precio">
                    Precio:
                </label>
                <input className="inputForm"
                    type="numeric"
                    id="precio"
                    onChange={(e) => setPrecio(e.target.value)}
                    value={precio}
                    required
                />
                <label htmlFor="dormitorios">
                    Dormitorios:
                </label>
                <input className="inputForm"
                    type="text"
                    id="dormitorios"
                    onChange={(e) => setDormitorios(e.target.value)}
                    value={dormitorios}
                    required
                />
                <label htmlFor="baño">
                    Baños:
                </label>
                <input className="inputForm"
                    type="text"
                    id="baño"
                    onChange={(e) => setBaño(e.target.value)}
                    value={baño}
                    required
                />
                    <label htmlFor="metros_edificio">
                    Metros Edificio:
                </label>
                <input className="inputForm"
                    type="numeric"
                    id="metrosEdificio"
                    onChange={(e) => setMetrosEdificio(e.target.value)}
                    value={metrosEdificio}
                    required
                />
                    <label htmlFor="metros_terreno">
                    Metros Terreno:
                </label>
                <input className="inputForm"
                    type="numeric"
                    id="metrosTerreno"
                    onChange={(e) => setMetrosTerreno(e.target.value)}
                    value={metrosTerreno}
                    required
                />
                <label htmlFor="descripcion">
                    Descripcion:
                </label>
                <input className="inputForm"
                    type="textarea"
                    rows="10"
                    id="descripcion"
                    onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion}
                    required
                />
                 <label htmlFor="foto">
                    Foto:
                </label>
                <input className="inputForm"
                    type="text"
                    id="foto"
                    onChange={(e) => setFoto(e.target.value)}
                    value={foto}
                    required
                />
                
                
                <button type="submit">Confirmar</button>
            </form>
        </div>
    );
}
export default FormAgregar;
