import React, {Component} from "react";
import Pelicula from "../../componentes/Pelicula/Pelicula";

class Resultados extends Component{
    constructor(props){
        super(props)
        this.state={
            busqueda: props.match.params.busqueda,
            resultados: []
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
          
          fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&include_adult=false&language=en-US&page=1`, options)
            .then((results) => results.json())
            .then((data) => this.setState({
                resultados: data.results
            }))
            .catch((err) => console.error(err));
    }

    render(){
        return(
            <>
                Resultados de: {this.state.busqueda}
                <div className="section-cart-peli">
                    {
                        this.state.resultados.map((elm,idx) => <Pelicula key={`${idx} - ${elm.title}`} data={elm}/>)
                    }
                </div>
            </>
        )
    }
}

export default Resultados;