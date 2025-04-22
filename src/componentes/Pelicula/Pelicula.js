import React, { Component } from "react";
import {Link} from 'react-router-dom';

// QUE REPRESENTA? 
    // Imagen, titulo, descripcion expandible, boton detalle, boton agregar/quitar de favoritos

class Pelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: props.data,
            mostrarContenido: false,
            favorito: false
        }
    }
    // state es inmutable directamente, solo se cambi con this.setState
    // React renderiza automaticamente cuando cambia el estado
    // data: los datos de la pelicula(imagen, titulo, etc) que recibe por props
    // mostrarContenido: controla si se ve o no la descripcion
    // favorito: guarda si esa pelicula esta marcada como favorita

    componentDidMount(){
        let storage = localStorage.getItem("favoritos")
        if (storage !== null) {
            let storageParseado = JSON.parse(storage)
            let estaMiId = storageParseado.includes(this.state.data.id)
            if (estaMiId) {
                this.setState ({favorito : true})
            }
        }
    }
    // ciclo de vida de un componente de clase
    // Se ejecuta una vez al montar el componente
    // ideal para cargar datos externos, hacer inicializaciones o acceder al localStorage
    // lee localStorage para ver si esta pelicula esta marcada como favorita
    // si si, actualiza el estado(favorito:true)

    // localStorage: permite guardar datos en el navegador que persisten entre sesiones
    // componentDidMount() es ideal para hacer este tipo de chequeos una sola vez.

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
      // si ya habia favoritos, se agrega uno nuevo al array
      // si no, se crea el array con un solo elemento
      // se actualiza el estad oapra que React re-renderice con los botones correctos

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
      // filtra el ID actual fuera del array 
      // guarda el nuevo array sin ese ID
      // React re/renderiza con el nuevo estado (favorito: false)

      //agregarFavorita(id) y sacarDeFavorita(id) modifican el array en localStorage y actualizan el estado para que React vuelva a renderizar

      // localStorage: permite guardar datos en el navegador, persisten al recargar la app
      // JSON.parse()/JSON.stringify(): se usan para convertir arrays/objetos entre string y objeto JS
      // setState(): cambia el estado y fuerza a React a renderizar de nuevo. No es inmediato; React batch actualizaciones


    ocultar(){
        this.setState({
            mostrarContenido: !this.state.mostrarContenido
        })
    }
    // alterna un valor booleano, entre mostrar y ocultar la descripcion

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
                        <button onClick={() => this.agregarFavorita(this.state.data.id)}>Agregar a favoritos</button>
                    ) : null
                }
                {
                    this.state.favorito === true ? (
                        <button onClick={() => this.sacarDeFavorita(this.state.data.id)}>Quitar de favoritos</button>
                    ) : null
                }


            </div>
        )
    }
    // <img />	Usa props (poster_path) para construir la URL del póster.
    // {... ? ... : ...}	Renderizado condicional. Si mostrarContenido es true, se muestra. Si no, no.
    // <Link>: Forma declarativa de navegacion. Reemplaza a <a> en React Router
    // key={...}	Cuando se use en .map(), debe tener una key única para optimización de React.
}


export default Pelicula;

// INTERACCION TOTAL CON EL SISTEMA

//Props: Recibe info de la película desde Resultados.js, Populares.js, etc.

//State: Administra si está marcada como favorita y si se muestra la descripción.

//Routing: Al hacer clic en “Detalle”, se navega a /detalle/:id usando Link.

//Persistencia local: Guarda favoritas usando localStorage.

//Ciclo de vida: Lee del almacenamiento local al montarse.

//UI dinámica: Cambia lo que se ve según los valores actuales del estado.