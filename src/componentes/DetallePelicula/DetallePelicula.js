import React, { Component } from 'react'

class DetallePelicula extends Component {
    constructor(props){
        super(props);
        this.state = {
            favorito: false
        };
    }
    alternarFavorito() {
        this.setState({ favorito: !this.state.favorito});
    }
    render() {
        const pelicula = this.props.data;

        return(
            <article className="detalle-peli">
                <img src={`https://image.tmdb.org/t/p/w500 ${pelicula.poster_path}`} alt={pelicula.title} />
                <h2>{pelicula.title}</h2>
                <p><h3>Rating:</h3> {pelicula.vote_average}</p>
                <p><h3>Fecha de estreno:</h3> {pelicula.release_date}</p>
                <p><h3>Duración:</h3> {pelicula.runtime} minutos</p>
                <p><h3>Sinopsis:</h3> {pelicula.overview}</p>
                {this.state.favorito === false ? (
                    <button onClick={()=> this.alternarFavorito()}>Agregar a Favoritos</button>
                ): (
                    <button onClick={()=> this.alternarFavorito()}>Quitar de Favoritos</button>
                )}
            </article>
        )
    }
}

export default DetallePelicula