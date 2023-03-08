/* import logo from "./logo.svg"; */
import "./App.css";
import { BrowserRouter as Router, Route,} from 'react-router-dom'
import LoginComp from "./components/LoginComp";
import Home from "./routes/Home";
import Registro from './routes/Registro'
import {Routes } from 'react-router';

import AgregarPublicacion from './components/AgregarPublicacion'




function App() {
  return (
    <>
 
<AgregarPublicacion/>
 
    </>
  );
}

export default App;
