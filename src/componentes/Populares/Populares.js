import React from "react";
import peliculasPop from "../Populares/PeliculasPop";
import './styles.css'
import Pelicula from "../Pelicula/Pelicula";

function Populares() {

    return(
        <section>
            <h2>Peliculas mas Populares</h2>
            <div  className="section-pop-peli">
                {peliculasPop.map((elm, idx) => <Pelicula key={`${idx} - ${elm.name}`} data={elm}/>)} 
            </div>
        </section>
    )
}

export default Populares;


