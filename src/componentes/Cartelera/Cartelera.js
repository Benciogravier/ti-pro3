import React from "react";
import peliculasCart from "../Cartelera/PeliculasCart"
import './styles.css'
import Pelicula from "../Pelicula/Pelicula";

function Cartelera() {

    return(
        <section>
            <h2>Cartelera</h2>
            <div  className="section-cart-peli">
                {peliculasCart.map((elm,idx) => <Pelicula key={`${idx} - ${elm.name}`} data={elm}/>)}
            </div>
        </section>
    )
}

export default Cartelera;


