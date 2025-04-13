import React, {Component} from "react";
import DetallePelicula from "../../componentes/DetallePelicula/DetallePelicula";

class Detalle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pelicula: null
      };
    }
  
    componentDidMount() {
      const id = this.props.match.params.id;
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`

      const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2RlMGQwZjJjMmEyNDBkZjc0NmQxYmQ3MGMxYzg0NiIsIm5iZiI6MTc0MzUzMTIyNC4yMDk5OTk4LCJzdWIiOiI2N2VjMmNkODE5ZjFiMWNiNGVmYTBiNjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mzcXwSEblhmvnWTV6blXwTJFlggcgIwLklQqYTZPseA'
        }
      };
  
      fetch(url, options)
        .then((results) => results.json())
        .then((data) => this.setState({ 
            pelicula: data 
        }))
        .catch(error => console.log('Error al obtener los datos:', error));
    }

    render(){
        return(
            <section>
                <h1>Detalle de la Pelicula</h1>
                {this.state.pelicula === null ? (
                    <h2>Cargando película...</h2>
                ):(
                    <DetallePelicula dara={this.state.pelicula} />
                )}
            </section>
        )
    }
    
}

export default Detalle