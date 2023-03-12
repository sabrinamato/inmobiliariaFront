import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Terreno from "./components/pages/terreno/Terreno";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<div>Ruta raiz</div>}/>
    

    
    <Route path="/terreno" element={<Terreno/>}/>
    <Route path="*" element={<Navigate to="/"/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

editar = (dato) => {
  var contador = 0;
  var arreglo = this.state.data;
  arreglo.map((registro) => {
    if (dato.id == registro.id) {
      arreglo[contador].terreno = dato.terreno;
      arreglo[contador].inmobiliaria = dato.inmobiliaria;
    }
    contador++;
  });
  this.setState({ data: arreglo, modalActualizar: false });
};
eliminar = (dato) => {
  var opcion = window.confirm(
    "Estás Seguro que deseas Eliminar el elemento " + dato.id
  );
  if (opcion == true) {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo.splice(contador, 1);
      }
      -contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  }
};
export default App;
