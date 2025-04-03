import React from "react"
import Populares from "../../componentes/Populares/Populares";
import Cartelera from "../../componentes/Cartelera/Cartelera";
import Formulario from "../../componentes/Formulario/Formulario";

function Home(){
    return (
    <React.Fragment>
      <Formulario />
      <Cartelera />
      <Populares />
    </React.Fragment>
    )
}

export default Home;