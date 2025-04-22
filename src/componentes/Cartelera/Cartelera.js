import React, { Component } from "react";
import './styles.css'
import Pelicula from "../Pelicula/Pelicula";
import {Link} from 'react-router-dom'

// bloque visual que muestra una lista de películas que están "en cartel", es decir, en reproducción actual. Trae esa información desde la API de TMDb y la muestra con el componente Pelicula.


class Cartelera extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas: []
        }
        //state.peliculas se usará para guardar las películas obtenidas de la API.
        //Se inicializa como un array vacío.
    }
    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2RlMGQwZjJjMmEyNDBkZjc0NmQxYmQ3MGMxYzg0NiIsIm5iZiI6MTc0MzUzMTIyNC4yMDk5OTk4LCJzdWIiOiI2N2VjMmNkODE5ZjFiMWNiNGVmYTBiNjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mzcXwSEblhmvnWTV6blXwTJFlggcgIwLklQqYTZPseA'
            }
          };
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then((results) => results.json())
            .then((data) => {
                console.log("data", data)
                this.setState({
                peliculas: data.results.slice(15)
            })})
            .catch((err) => console.error(err));
    }
    // Parte del ciclo de vida de React. Se ejecuta una sola vez al cargar el componente.

    // fetch() hace una solicitud HTTP a la API de TMDb.
 
    render(){
        return(
            <section>
                <h2>Cartelera</h2>
                <div  className="section-cart-peli">
                    {this.state.peliculas.map((elm,idx) => <Pelicula key={`${idx} - ${elm.title}`} data={elm}/>)}
                </div>
            <div className="ver-mas-container">
                <Link to={'/cartelera'}>
                    <button>Ver mas</button>    
                </Link>
            </div>
            </section>
        )
    }
}

// .map()	Recorre la lista de películas y devuelve un componente Pelicula por cada una.
// key={${idx} - ${elm.title}}	Clave única para que React pueda seguir el DOM eficientemente.
// data={elm}	Se pasa la info de cada película como prop a Pelicula.
// <Link to="/cartelera">	Navegación interna sin recargar la página.

export default Cartelera;

// CONCEPTOS CLAVE 

// Ciclo de vida:	Uso de componentDidMount() para hacer fetch y setear estado.
// Consumo de APIs:	Uso de fetch con headers y Bearer token para autenticarse.
// Render dinámico:	Se usa .map() para generar contenido visual en base a datos.
// Componentes hijos:	Pelicula encapsula cómo se ve cada ítem.
// Routing:	El botón “Ver más” redirige al usuario a una ruta específica.
// Separación de responsabilidades:	Este componente no renderiza detalle ni lógica de favoritos, solo muestra un bloque reutilizable de películas.

