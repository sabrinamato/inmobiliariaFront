import React, { useState } from "react";
import { Link } from "react-router-dom";
import VerPublicaciones from "../Modal/VerPublicaciones";
import "../style.css";
import {
  HomeOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

function Administrar() {
  const [verPublicacionesOpen, setVerPublicacionesOpen] = useState(false);
  const openVerPubli = () => {
    setVerPublicacionesOpen(!verPublicacionesOpen);
  };

  return (
    <div className="bgAdmin">
      <div className="administrar">
        <Link to={"/"} className="cerrarAdministrar">
          <h3>X</h3>
        </Link>
        <ul className="navAdministrar">
          <li>
            <HomeOutlined className="iconoMenuAdmin" />
            <h3 className="mas">+</h3>
            <a href="#">Nueva publicación</a>
          </li>
          <li>
            <DeleteOutlined className="iconoMenuAdmin" />
            <a href="#">Borrar publicación</a>
          </li>
          <li>
            <EditOutlined className="iconoMenuAdmin" />
            <a href="#">Modificar publicación</a>
          </li>
          <li onClick={openVerPubli}>
            <SearchOutlined className="iconoMenuAdmin" />
            <a href="#">Ver publicaciones</a>
          </li>
          <li>
            <LogoutOutlined className="iconoMenuAdmin" />
            <a href="#">Cerrar sesion</a>
          </li>
        </ul>
        {verPublicacionesOpen && (
          <VerPublicaciones cerrarVerPubli={openVerPubli} />
        )}
      </div>
    </div>
  );
}

export default Administrar;
