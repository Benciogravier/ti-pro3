import React, {Component} from "react";
import Pelicula from "../../componentes/Pelicula/Pelicula";

class Favoritas extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculasFav: [],
            hayElementosEnFav: false
        }
    }

    componentDidMount(){
        const storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let favoritasParseado = JSON.parse(storage)
            if(favoritasParseado.length > 0){
                const options = {
                    method: 'GET',
                    headers: {
                      accept: 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2RlMGQwZjJjMmEyNDBkZjc0NmQxYmQ3MGMxYzg0NiIsIm5iZiI6MTc0MzUzMTIyNC4yMDk5OTk4LCJzdWIiOiI2N2VjMmNkODE5ZjFiMWNiNGVmYTBiNjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mzcXwSEblhmvnWTV6blXwTJFlggcgIwLklQqYTZPseA'
                    }
                  };
                //No entra en el oral
                Promise.all(
                favoritasParseado.map((elm) => 
                    fetch(`https://api.themoviedb.org/3/movie/${elm}?language=en-US`, options)
                        .then((results) => results.json())
                        .catch((err) => console.error(err))
                ))
                .then((data)=> this.setState({
                    peliculasFav: data,
                    hayElementosEnFav: true
                }))
                .catch(e => console.log(e))
                
            }
        }
    }


    render(){
        return(
            <>
                <h1>Tus Peliculas Favoritas</h1>
                <div className="section-cart-peli">
                {
                    this.state.peliculasFav.length > 0 
                    ?
                    this.state.peliculasFav.map((elm,idx) => <Pelicula data={elm} key={idx + elm.title} />)
                    :
                    this.state.hayElementosEnFav === false ?
                        <h1>El Carrito esta vacio</h1>
                    :
                    <h1>Cargando...</h1>
                }
                </div>

            </>
        )
    }
}

export default Favoritas;