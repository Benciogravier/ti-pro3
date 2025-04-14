import React from "react"
import Populares from "../../componentes/Populares/Populares";
import Cartelera from "../../componentes/Cartelera/Cartelera";


function Home(){
    return (
    <React.Fragment>
      <Cartelera />
      <Populares />
    </React.Fragment>
    )
}

export default Home;