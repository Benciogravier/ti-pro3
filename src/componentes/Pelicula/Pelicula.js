import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Pelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: props.data,
            mostrarContenido: false,
            favorito: false
        }
    }

    ocultar(){
        this.setState({
            mostrarContenido: !this.state.mostrarContenido
        })
    }

    agregarFav(){
        this.setState({
            favorito: !this.state.favorito
        })
    }

    render() {
        return(
            <div className="pelicula-cart-card">
                <img className="img-cart-peli" src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} alt={this.state.data.title}/>
                <h3>{this.state.data.title}</h3>
                {
                    this.state.mostrarContenido === true ? (
                    <>
                        <h4>Descripcion:</h4>
                        <p> {this.state.data.overview} </p>
                        <button onClick={() => this.ocultar()}>Ocultar Descripcion</button>
                    </>
                    ) : null
                }
                {
                    this.state.mostrarContenido === false ? (
                        <button onClick={() => this.ocultar()}>Ver descripcion</button>
                    ) : null                    
                }

                <Link to={`/detalle/${this.state.data.id}`}>
                    <button>Detalle</button>   
                </Link>

                {
                    this.state.favorito === false ? (
                        <button onClick={() => this.agregarFav()}>Agregar a favoritos</button>
                    ) : null
                }
                {
                    this.state.favorito === true ? (
                        <button onClick={() => this.agregarFav()}>Quitar de favoritos</button>
                    ) : null
                }


            </div>
        )
    }
}


export default Pelicula;