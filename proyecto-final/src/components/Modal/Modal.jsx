import React from "react";
import "./styleModal.css";

function Modal(props) {

    function closeModal() {
        props.close(false);
    }

    return (

        <div className="modal containerModal">
            <div className="containerBtn"><button className="btnClose" onClick={closeModal}>X</button></div>
            <div className="container1">
                <div className="modalDetalle">
                    <div className="container2">
                        <div className="InmobiliariaGeneral">
                            <h3>{props.propiedades.id}</h3>
                            
                        </div>
                        <div className="Detalle">
                            <ul>
                                <li>{`${props.propiedades.operacion}`}</li>
                                {/* <li>{`${props.propiedades.tipoInmueble}`}</li>
                                <li>{`${props.propiedades.departamento} kg`}</li>
                                <li>{props.propiedades.barrio}</li>
                                <li>{props.propiedades.precio}</li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="fotoImg">
                        <img src={`../img/${props.propiedades.foto}.png`} alt="foto" />
                    </div>
                </div>
                <br />
                <div className="modalParrafo">
                    <h3>Descripcion</h3>
                    <p>{props.propiedades.descripcion}</p>
                </div>
            </div>
            <div className="modalDetalle">
                <h3>Detalles</h3>
                <div className="containerDetalle">
                    <label>Tipo Inmueble</label>
                    <input type="range" min={0} max={100} className="inputPropiedades" step={1} value={props.propiedades.TipoInmueble}></input>
                    <label>Departamento</label>
                    <input type="range" min={0} max={100} className="inputPropiedades" step={1} value={props.propiedades.departamento}></input>
                    <label>Barrio</label>
                    <input type="range" min={0} max={100} className="inputPropiedades" step={1} value={props.propiedades.barrio}></input>
                    <label>Precio</label>
                    <input type="range" min={0} max={100} className="inputPropiedades" step={1} value={props.propiedades.precio}></input>
                    <label>Dormitorios</label>
                    <input type="range" min={0} max={100} className="inputPropiedades" step={1} value={props.propiedades.dormitorios}></input>
                    <label>Baños</label>
                    <input type="range" min={0} max={100} className="inputPropiedades" step={1} value={props.propiedades.baño}></input>
                    <label>Metros Terreno</label>
                    <input type="range" min={0} max={100} className="inputPropiedades" step={1} value={props.propiedades.metrosTerreno}></input>
                    <label>Metros Edificio</label>
                    <input type="range" min={0} max={100} className="inputPropiedades" step={1} value={props.propiedades.metrosEdificio}></input>
                    
                </div>
            </div>
        </div>
    );
}

export default Modal;
