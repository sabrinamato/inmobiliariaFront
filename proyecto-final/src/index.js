import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Administrar from "./components/Administrar/Administrar";
import Detalle from "./components/Modal/Detalle";
import LoginComp from "./components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/administrador",
    element: <Administrar />,
  },
  {
    path: "/propiedad/:id",
    element: <Detalle />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
