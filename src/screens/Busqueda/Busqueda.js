import React from "react";
import Buscador from "../../componentes/Buscador/Buscador";

function Busqueda(props){
    console.log('props about us', props);
    return(
        <div>
            <h1>Resultado de búsqueda</h1>
            <Buscador history={props.history} />
        </div>
    )
}

export default Busqueda;