import React, {Component} from "react";
import Pelicula from "../../componentes/Pelicula/Pelicula";
import FiltroForm from "../../componentes/FiltroForm/FiltroForm";

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
}

export default MasPopulares;