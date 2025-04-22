import React, {Component} from "react";
import Pelicula from "../../componentes/Pelicula/Pelicula";
import FiltroForm from "../../componentes/FiltroForm/FiltroForm";

// QUE HACE ESTA SCREEN

// Carga películas populares desde TMDb.
// Muestra un campo de búsqueda (usando FiltroForm).
// Filtra las películas en tiempo real según lo que el usuario escriba.
// Renderiza cada película con el componente Pelicula.

class MasPopulares extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas: [],
            backupPeliculas: []
        }
    }
    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2RlMGQwZjJjMmEyNDBkZjc0NmQxYmQ3MGMxYzg0NiIsIm5iZiI6MTc0MzUzMTIyNC4yMDk5OTk4LCJzdWIiOiI2N2VjMmNkODE5ZjFiMWNiNGVmYTBiNjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mzcXwSEblhmvnWTV6blXwTJFlggcgIwLklQqYTZPseA'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then((results) => results.json())
            .then((data) => this.setState({
                peliculas: data.results,
                backupPeliculas: data.results
            }))
            .catch((error) => console.error(error));
    }
    // Se hace un fetch a la API de TMDb, ahora al endpoint de "películas populares".
    // Guarda los datos en dos arrays: uno para mostrar, otro para filtrar.

    filtrarPeliculas(busqueda){ // filtramos todo lo que pone el usuario 
        const peliculasFiltradas = this.state.backupPeliculas.filter(
            (elm)=> elm.title.toLowerCase().includes(busqueda.toLowerCase())
        )
        this.setState({peliculas: peliculasFiltradas})
    }

    render(){
        return(
            <>
                <h1>Peliculas mas Populares</h1>
                <FiltroForm filtro={(busquedaUsuario) => this.filtrarPeliculas(busquedaUsuario)}/>
                {
                    this.state.peliculas.length === 0 ? (
                        <h2>Cargando las peliculas</h2>
                    ) : null
                }
                <div className="section-pop-peli">
                    {
                        this.state.peliculas.map((elm,idx) => <Pelicula key={`${idx} - ${elm.title}`} data={elm}/>)
                    }
                </div>
            </>
        )
    }
    // FiltroForm:	Componente hijo que llama a una función del padre al escribir.
    // .map():	Crea un componente visual por cada película.
    // Pelicula:	Visualiza la tarjeta con imagen, botón de favoritos, etc.
    // key:	Ayuda a React a optimizar el renderizado de listas.
}

export default MasPopulares;

// Separación lógica-visual	La lógica está en MasPopulares, el diseño en Pelicula.
// Filtrado local	No hace nuevos fetchs: reutiliza los datos en memoria.
// Props de función	Técnica común para que un componente hijo (formulario) afecte al padre (lista).
// Declaratividad	Toda la interfaz responde a los cambios de estado automáticamente.