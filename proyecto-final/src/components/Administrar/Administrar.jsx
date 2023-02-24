import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../style.css";

function Administrar() {
  return (
    <div className="administrar">
      <Link to={"/"} className="cerrarAdministrar">
        <h3>X</h3>
      </Link>
      <h1 className="tituloAdmin">Administrar</h1>
      <nav className="menuAdministrar">
        <ul className="navAdministrar">
          <li>
            <a href="#">Nueva publicación</a>
          </li>
          <li>
            <a href="#">Borrar publicación</a>
          </li>
          <li>
            <a href="#">Modificar publicación</a>
          </li>
          <li>
            <a href="#">Ver publicaciones</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Administrar;
