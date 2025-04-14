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

    componentDidMount(){
        let storage = localStorage.getItem("favoritos")
        if (storage != null) {
            let storageParseado = JSON.parse(storage)
            let estaMiId = storageParseado.includes(this.state.data.id)
            if (estaMiId) {
                this.setState ({favorito : true})
            }
        }
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

    ocultar(){
        this.setState({
            mostrarContenido: !this.state.mostrarContenido
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
}


export default Pelicula;