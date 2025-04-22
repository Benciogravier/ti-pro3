import React, {Component} from "react";
import Pelicula from "../../componentes/Pelicula/Pelicula";

// QUE HACE ?

// Al montarse, lee del localStorage los IDs de las películas favoritas.
// Usa esos IDs para hacer múltiples fetchs en paralelo a la API de TMDb.
// Muestra todas esas películas usando el componente Pelicula.
// Si no hay favoritas, muestra un mensaje de “El carrito está vacío”.

class Favoritas extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculasFav: [],
            hayElementosEnFav: false
        }
    }
// peliculasFav: array de objetos con los datos completos de cada peli.
// hayElementosEnFav: flag para saber si alguna vez hubo favoritos guardados (diferenciar entre "nunca hubo" y "estoy cargando").

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
// localStorage.getItem(...):	Recupera los IDs de favoritos guardados.
// Promise.all([...]):	Ejecuta varios fetchs al mismo tiempo (uno por cada ID).
// .map(id => fetch(...)):	Llama a la API de TMDb para cada película específica.
// .then(data => setState(...)):	Guarda todas las respuestas en el estado.
// catch:	Maneja errores de red o formato.


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
// Hay pelis favoritas:	Se renderizan con .map() usando Pelicula.
// hayElementosEnFav === false:	Muestra "El carrito está vacío".
// Si hay IDs pero aún no llegaron los datos:	Muestra "Cargando...".
}

export default Favoritas;

// CONCEPTOS CLAVE PARA EL EXAMEN

// Manejo de múltiples fetchs:	Con Promise.all, se hacen varias llamadas en paralelo.
// Persistencia de datos:	Uso de localStorage para recordar elecciones del usuario.
// Renderizado condicional:	Diferentes mensajes según el estado del array y flags auxiliares.
// Reutilización:	Usa el componente Pelicula, manteniendo consistencia visual.
// Separación de responsabilidades:	La lógica de favoritos no está en Pelicula, sino en Favoritas.js.