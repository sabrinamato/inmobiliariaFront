import React, { useEffect, useState } from "react";
// import Footer from "../Footer/Footer";
import List from "../List/List";
import Portada from "../Portada/Portada";
import Buscador from "../Search/Buscador";
import Header from "../Header/Header";
import { propiedades } from "../../API/Rule_inmobiliaria";

function Home() {
  const [arrayPropyedades, setArrayPropiedades] = useState([]);
  // const [flag, setFlag] = useState(false);

  const getPropiedades = async () => {
    await propiedades().then((response) => {
      setArrayPropiedades(response);
    });
  };
  useEffect(() => {
    getPropiedades();
  });

  return (
    <div>
      <Header />
      <Portada />
      <div className="bgImage">
        <Buscador />
        <div className="scrol">
          <List propiedades={arrayPropyedades} />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
