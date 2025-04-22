import React, {Component} from "react";
import './styles.css'

// QUE HACE ESTA PANTALLA? 

// Lee el ID de la película desde la URL (/detalle/:id).
// Llama a la API de TMDb para obtener los datos de esa película.
// Muestra imagen, título, rating, fecha de estreno, duración y sinopsis.
// Permite agregar o quitar la película de favoritos usando localStorage.

class Detalle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.match.params.id,
        pelicula: {},
        favorito: false
      };
    }
// id:	Extraída desde la URL con match.params.
// pelicula:	Objeto que se llena con los datos de la API.
// favorito:	Booleano que indica si esta película ya está en localStorage.

  
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
// Se hace una solicitud HTTP dinámica basada en id.
// Se usa localStorage para saber si ya es favorita.
// componentDidMount() es ideal para fetching y setup inicial.
      
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
    // Actualiza localStorage
    // Modifica el estado con this.setState() para que el boton se actualice automaticamente

    render(){
      return(
          <section className="detalle-container">
              <h1>Detalle de la Pelicula</h1>
              {this.state.pelicula === null ? (
                  <h2>Cargando película...</h2>
              ) : (
                  <article className="detalle-peli">
                      <div className="detalle-img-container">
                          <img className="img-cart-peli" src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
                      </div>
                      <div className="detalle-info">
                          <h2>{this.state.pelicula.title}</h2>
                          <p><strong>Rating:</strong> {this.state.pelicula.vote_average}</p>
                          <p><strong>Fecha de estreno:</strong> {this.state.pelicula.release_date}</p>
                          <p><strong>Duración:</strong> {this.state.pelicula.runtime} minutos</p>
                          <p><strong>Sinopsis:</strong> {this.state.pelicula.overview}</p>
                          {this.state.favorito === false ? (
                              <button onClick={()=> this.agregarFavorita(this.state.pelicula.id)}>Agregar a Favoritos</button>
                          ) : (
                              <button onClick={()=> this.sacarDeFavorita(this.state.pelicula.id)}>Quitar de Favoritos</button>
                          )}
                      </div>
                  </article>
              )}
          </section>
      )
  }

// Condicional (this.state.pelicula === null):	Muestra un mensaje si la info aún no llegó.
// JSX dinámico:	Usa los datos de this.state.pelicula para completar el contenido.
// Botones con estado reactivo:	El estado favorito determina qué botón mostrar.
// URL dinámica:	Se construye con poster_path, title, etc. obtenidos de la API.
    
}

export default Detalle;

//  CONCEPTOS CLAVE

// Routing dinámico:	Usa match.params.id para acceder al ID desde la URL.
// Ciclo de vida:	componentDidMount hace el fetch y chequea favoritos.
// Persistencia:	Usa localStorage para guardar datos entre sesiones.
// Estado derivado de props:	El ID se pasa por props, no es interno al componente.
// Interacción condicional:	Se renderizan distintos botones según el estado.
// Encapsulamiento:	Toda la lógica está contenida en esta Screen, no depende de otros componentes.