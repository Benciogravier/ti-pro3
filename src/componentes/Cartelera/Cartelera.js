import React from "react";
import peliculasCart from "../Cartelera/PeliculasCart"
import './styles.css'

function Cartelera() {

    return(
        <section>
        <h2>Cartelera</h2>
        <div  className="section-cart-peli">
   
            {peliculasCart.map((elm) => (
                <div key={elm.id} className="pelicula-cart-card">
                    <img className="img-cart-peli" src={`./img/${elm.img}`} alt={elm.name}/>
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

export default Cartelera;


