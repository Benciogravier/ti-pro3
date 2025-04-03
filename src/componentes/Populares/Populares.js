import React from "react";
import peliculasPop from "../Populares/PeliculasPop";
import './styles.css'

function Populares() {

    return(
        <section>
        <h2>Peliculas mas Populares</h2>
        <div  className="section-pop-peli">
   
            {peliculasPop.map((elm) => (
                <div key={elm.id} className="pelicula-pop-card">
                    <img className="img-pop-peli" src={`./img/${elm.img}`} alt={elm.name}/>
                    <h3>{elm.name}</h3>
                    <button>Ver descripcion</button>
                    <h4>Decripcion: tenemos que hacerla desaparecer</h4>
                    <button>Detalle</button>
                    <button>Agregar a favoritos / quitar</button>
                </div>
            ))}
            
        </div>

        </section>


    )
}

export default Populares;


