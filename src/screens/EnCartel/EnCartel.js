import React,{Component} from "react";
import Pelicula from "../../componentes/Pelicula/Pelicula";
import FiltroForm from "../../componentes/FiltroForm/FiltroForm";

// QUE HACE ? 

// Trae todas las películas "en cartelera" desde TMDb al montarse.
// Muestra un buscador (usando FiltroForm) para filtrar películas por título.
// Renderiza las películas filtradas con el componente Pelicula.

class EnCartel extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            backupPeliculas: []
        }
    }
// peliculas:	Lista actual que se muestra (filtrada o completa).
// backupPeliculas:	Copia original que no se modifica, sirve para reiniciar o volver a filtrar desde el total.
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
            .then((data) => this.setState({
                peliculas: data.results,
                backupPeliculas: data.results
            }))
            .catch((err) => console.error(err));
    }
    // Se hace una solicitud a la API de TMDb para obtener las películas que están ahora en cines.
    // Almacena los datos tanto en peliculas como en backupPeliculas.
    // Este patrón permite luego filtrar sin volver a llamar a la API.

    filtrarPeliculas(busqueda){ // filtramos todo lo que pone el usuario 
        console.log('busqueda', busqueda)
        const peliculasFiltradas = this.state.backupPeliculas.filter(
            (elm)=> elm.title.toLowerCase().includes(busqueda.toLowerCase())
        )
        this.setState({peliculas: peliculasFiltradas}, ()=> console.log('this.state', this.state.peliculas))
        console.log(this.state.peliculas)
    }
// .filter():	Crea un nuevo array con películas cuyo título incluye el texto buscado.
// toLowerCase():	Permite hacer búsquedas insensibles a mayúsculas/minúsculas.
// setState():	Actualiza la lista de películas que se ve en pantalla.

    render(){
        return(
            <>

                <h1>Peliculas en los Cines</h1>
                <FiltroForm filtro={(busquedaUsuario) => this.filtrarPeliculas(busquedaUsuario)}/>
                   
                {
                    this.state.peliculas.length === 0 ? (
                        <h2>Cargando las peliculas en cartelera</h2>
                    ) : null
                }
                <div className="section-cart-peli">
                    {
                        this.state.peliculas.map((elm,idx) => <Pelicula key={`${idx} - ${elm.title}`} data={elm}/>)
                    }
                </div>
            </>
        )
    }
    // El componente FiltroForm recibe una función como prop.
    // Cada vez que el usuario escribe, llama a esa función con el nuevo valor.
    // Esto es una forma de comunicación ascendente, donde un componente hijo informa al padre de un cambio.

    // Renderizado condicional	Muestra "Cargando..." sólo si aún no hay películas.
    // .map()	Recorre las películas filtradas y las renderiza.
    // Pelicula	Componente visual reutilizado para cada ítem.
}

export default EnCartel;

// CONCEPTOS CLAVE

// Consumo de API:	Obtención dinámica de datos con fetch y componentDidMount.
// Filtrado en tiempo real:	Lógica declarativa con .filter() y setState().
// Estado duplicado para respaldo:	Patrón común para permitir reset de filtros.
// Props de función:	Comunicación padre-hijo usando callbacks (filtro={(...) => ...}).
// Encapsulamiento:	Toda la lógica de filtrado y render está en EnCartel, no en Pelicula.