import React from "react";
import {Link} from 'react-router-dom';

function Pelicula(props) {
    return(
        <div className="pelicula-cart-card">
            <img className="img-cart-peli" src={`./img/${props.data.img}`} alt={props.data.name}/>
            <h3>{props.data.name}</h3>
            <button>Ver descripcion</button>
            <h4>Decripcion: tenemos que hacerla desaparecer</h4>
            <Link to={`/detalle/${props.data.id}`}>
                <button>Detalle</button>   
            </Link>
            <button>Agregar a favoritos / quitar</button>
        </div>
    )
}

export default Pelicula;