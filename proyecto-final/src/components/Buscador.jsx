import React, { useState } from "react";

import "./styleBuscador.css";

function Buscador (props) {

    const [nombrePropiedades, setNombrePropiedades] = useState("");

    function getPropiedades() {
        props.listPropiedades();
        props.buscar(nombrePropiedades);
    } 
    const nombreIngresado = (e) => {
        setNombrePropiedades(e.target.value)
    }

    return (

        <>
            <main className="containerSearch">
                <div className="navSearch">
                    <input className="inputSearch" type="search" placeholder="Buscar..." onChange={nombreIngresado}></input>
                    <button className="buttonSearch" onClick={getPropiedades}>BUSCAR</button>
                </div>
            </main>
        </>
    );
}

export default Buscador;
