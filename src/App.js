import React from "react";
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Populares from "./componentes/Populares/Populares";
import Cartelera from "./componentes/Cartelera/Cartelera";
import Formulario from "./componentes/Formulario/Formulario";

function App() {
  return (
    <>
      <Header />
      <Formulario />
      <Cartelera />
      <Populares />
      <Footer />
    </>
  );
}

export default App;
