import React, {Component} from "react";
import Pelicula from "../../componentes/Pelicula/Pelicula";

// esto lee de la URL el termino de busqueda (:busqueda)
// Hace un fetch a una API externa (TMDb) usando ese termino
// Guarda los resultados en el estado
// Renderiza una lista de componentes Pelicula, uno por cada resultado 

class Resultados extends Component{
    constructor(props){
        super(props)
        this.state={
            busqueda: props.match.params.busqueda,
            resultados: []
        }
    }
    // usa match.params.busqueda que viene de la URLc (/resultados/:busqueda)
    // Guarda en state:
        // State: se usa para almacenar resultado dinamicos(cuando llegan desde una API)
        // el termino buscado
        // un array vacio para llenar luego con los resultados de la API

    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2RlMGQwZjJjMmEyNDBkZjc0NmQxYmQ3MGMxYzg0NiIsIm5iZiI6MTc0MzUzMTIyNC4yMDk5OTk4LCJzdWIiOiI2N2VjMmNkODE5ZjFiMWNiNGVmYTBiNjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mzcXwSEblhmvnWTV6blXwTJFlggcgIwLklQqYTZPseA'
            }
          };        
          fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&include_adult=false&language=en-US&page=1`, options)
            .then((results) => results.json())
            .then((data) => this.setState({
                resultados: data.results
            }))
            .catch((err) => console.error(err));
    }
              // Se ejecuta automaticamente UNA VEZ cuando el componenete se monta por primera vez
              // Llama a la API de TMDb
              // Guarda las peliculas en this.state.resultados

              // TEORIA
                // componentDidMount() es parte del ciclo de vida de los componentes de clase
                // Es ideal para llamados a APIs o tareas asincronicas al cargar la vista
                // fetch() es una funcion nativa de JS para haer HTTP requests

    render(){ 
        return(
            <>
                Resultados de: {this.state.busqueda}
                <div className="section-cart-peli">
                    {
                        this.state.resultados.map((elm,idx) => <Pelicula key={`${idx} - ${elm.title}`} data={elm}/>) //usa .map() para renderizar una tarjeta de pelicula por cada resultado usando el componente Pelicula.
                    }
                </div>
            </> 
        )
    }
}

export default Resultados;

// TEORIA
    // .map() es una funcion de array de JS, muy ysada en React para renderizar listas dinamicas
    // cada componente Pelicula recibe sus datos por props
    // se necesita una key unico para optimizar el renderizado

// CONEXION CON LA APP

    /*App.js */
    // Define la ruta /resultados/:busqueda que renderiza este componente.

    /*Busqueda.js */
    // Es la pantalla previa donde se escribe el término.

    /*Buscador.js */
    // Redirige a /resultados/loQueEscribio.

    /*Resultados.js */
    // Lee el término desde la URL, llama a la API, muestra resultados.

    /*Pelicula.js */
    // Se encarga de mostrar visualmente cada resultado (que aún no analizamos).

