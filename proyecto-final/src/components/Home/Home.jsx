import React from "react";
// import Footer from "../Footer/Footer";
import List from "../List/List";
import Portada from "../Portada/Portada";
import Buscador from "../Search/Buscador";
import Header from "../Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Portada />
      <div className="bgImage">
        <Buscador />
        <div className="scrol">
          <List />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
