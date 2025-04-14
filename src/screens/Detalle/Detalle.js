import React, {Component} from "react";

class Detalle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.match.params.id,
        pelicula: {},
        favorito: false
      };
    }

  
    componentDidMount() {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2RlMGQwZjJjMmEyNDBkZjc0NmQxYmQ3MGMxYzg0NiIsIm5iZiI6MTc0MzUzMTIyNC4yMDk5OTk4LCJzdWIiOiI2N2VjMmNkODE5ZjFiMWNiNGVmYTBiNjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mzcXwSEblhmvnWTV6blXwTJFlggcgIwLklQqYTZPseA'
        }
      };

      let storage = localStorage.getItem("favoritos")
      if (storage != null) {
          let storageParseado = JSON.parse(storage)
          let estaMiId = storageParseado.includes(Number(this.state.id))
          if (estaMiId) {
              this.setState ({favorito : true})
          }
      }
      
      fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?language=en-US`, options)
        .then((results) => results.json())
        .then((data) => this.setState({pelicula: data}))
        .catch((err) => console.error(err))
    }

    agregarFavorita(id){
      let storage = localStorage.getItem('favoritos')
      if(storage !== null){
        let arrParseado = JSON.parse(storage)
        arrParseado.push(id)
        let arrStringificado = JSON.stringify(arrParseado)
        localStorage.setItem('favoritos', arrStringificado)
      } else {
        let primerID = [id]
        let arrStringificado = JSON.stringify(primerID)
        localStorage.setItem('favoritos', arrStringificado)
      }

      this.setState({
        favorito: true
      })
    }

    sacarDeFavorita(id){
      const storage = localStorage.getItem('favoritos')
      const storageParseado = JSON.parse(storage)
      const filtrarStorage = storageParseado.filter((elm) => elm !== id )
      const storageStringificado = JSON.stringify(filtrarStorage)
      localStorage.setItem('favoritos', storageStringificado)

      this.setState({
        favorito: false
      })
    }

    render(){
        return(
            <section>
                <h1>Detalle de la Pelicula</h1>
                {this.state.pelicula === null ? (
                    <h2>Cargando película...</h2>
                ):(
                    <article className="detalle-peli">
                    <img className="img-cart-peli" src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title}/>
                    <h2>{this.state.pelicula.title}</h2>
                    <p><h3>Rating:</h3> {this.state.pelicula.vote_average}</p>
                    <p><h3>Fecha de estreno:</h3> {this.state.pelicula.release_date}</p>
                    <p><h3>Duración:</h3> {this.state.pelicula.runtime} minutos</p>
                    <p><h3>Sinopsis:</h3> {this.state.pelicula.overview}</p>
                    {this.state.favorito === false ? (
                        <button onClick={()=> this.agregarFavorita(this.state.pelicula.id)}>Agregar a Favoritos</button>
                    ): (
                        <button onClick={()=> this.sacarDeFavorita(this.state.pelicula.id)}>Quitar de Favoritos </button>
                    )}
                </article>
                )}
            </section>
        )
    }
    
}

export default Detalle;