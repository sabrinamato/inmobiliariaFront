
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Terreno from "./components/pages/terreno/Terreno";

function App() {
  return (
    
    <BrowserRouter>
    
    <Routes>
    
    <Route path="/" element={<div>Ruta raiz</div>}/>
    

    
    <Route path="/terreno" element={<Terreno/>}/>
    <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
