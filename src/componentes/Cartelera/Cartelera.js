import React, { Component } from "react";
import './styles.css'
import Pelicula from "../Pelicula/Pelicula";
import {Link} from 'react-router-dom'


class Cartelera extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas: []
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
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then((results) => results.json())
            .then((data) => {
                console.log("data", data)
                this.setState({
                peliculas: data.results.slice(15)
            })})
            .catch((err) => console.error(err));
    }
 
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






export default Cartelera;


