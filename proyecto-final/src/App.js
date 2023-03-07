/* import logo from "./logo.svg"; */
import "./App.css";
import { BrowserRouter as Router, Route,} from 'react-router-dom'
import LoginComp from "./components/LoginComp";
import Home from "./routes/Home";
import Registro from './routes/Registro'
import {Routes } from 'react-router';




function App() {
  return (
    <>
    <LoginComp/>
{/* 

     <Router>
      <Routes>
        <Route path="/" element={LoginComp}></Route>
        <Route path="/home" element={Home}></Route>
        <Route path="/registro" element={Registro}></Route>
      </Routes>
      </Router>  
 */}


    </>
  );
}

export default App;
