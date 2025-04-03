import React from "react";

function Detalle(props){
    const idPelicula = props.match.params.id
    return(
        <div>
            <h1>Detalle de la película {idPelicula}</h1>
        </div>
    )
}

export default Detalle;