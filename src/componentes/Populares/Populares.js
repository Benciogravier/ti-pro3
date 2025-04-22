import React, {Component} from "react";
import './styles.css'
import Pelicula from "../Pelicula/Pelicula";
import {Link} from 'react-router-dom'

class Populares extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas: [],
            backupPeliculas: []
        }
    }
// peliculas: lista actual que se muestra.
// backupPeliculas: copia original para restaurar si se filtra, ordena, etc. (típico en apps que permiten filtros en tiempo real).

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
                peliculas: data.results.slice(15),
                backupPeliculas: data.results.slice(15)
            }))
            .catch((err) => console.error(err));
    }
    // mismo que cartelera

    render(){
        return(
            <section>
                <h2>Peliculas mas Populares</h2>
                <div  className="section-pop-peli">
                    {this.state.peliculas.map((elm, idx) => <Pelicula key={`${idx} - ${elm.title}`} data={elm}/>)} 
                </div>
                <div className="ver-mas-container">
                    <Link to={'/populares'}>
                        <button>Ver mas</button>    
                    </Link>
                </div>
            </section>
        )
    }

}
// Preparación para filtros: La presencia de backupPeliculas sugiere que puede haber lógica de filtrado (aunque no esté en este archivo).


export default Populares;


