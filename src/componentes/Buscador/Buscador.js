import React, {Component} from "react";

// Buscador: componente que permite redireccionar al usuario a una URL basada en lo que escribio. Es parte de la interfaz de usuario (UI)

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: '' 
        }    
    }
    // constructor: funcion especial que se ejecuta cuando se crea el componente
    // super(props): llama al constructor de la clase padre (component) y permite usar this.props
    // se define this.state, un objeto interno donde React guarda valores que pueden cambiar y que afectan lo que se renderiza 

    controlarForm(evento){
        evento.preventDefault()
        this.props.history.push('/resultados/' + this.state.input)
    }  // evento.preventDefault() evita el comportamiento por defecto del form (que es recargar la pagina)
       //Usa this.props.history.push() para cambiar la ruta programaticamente --> esto es navegacion controlada(routing)

    controlarInput(evento){
        this.setState({input: evento.target.value})
    } //Se ejecuta cada vez que el usuario escribe el input
      // evento.target.value representa el valor actual del input
      // setState() actualiza el estado interno, lo que dispara un re-render automatico del    componente


      //buscamos que la pantalla de resultados al acceder al termino buscado sin necesidad de recargar la pagina
    render(){
        return(
            <form onSubmit={(evento)=> this.controlarForm(evento)}>
                <input placeholder="Buscador" value={this.state.input} onChange={(evento)=> this.controlarInput(evento)} />
                <button type="submit">Buscar</button>
            </form>
        )
    }
    //Render:
    //usa input controlado --> el valor del input esta vicnulado al estado interno (this.state.input)
    //al cambiar el input, se actualiza el estado
    //Al hacer submit se llama a controlarFrom()
}

export default Buscador;

// Conceptos teoricos clave:

    //Componente de clase: Definido con class, tiene metodos y estado. Mas verboso que los hooks pero igual de valido

    //Estado (this.state): Guarda info que cambia con el tiempo. (ej: lo que el usuario escribe)

    //Eventos(onChange, onSubmit): Son manejadores que permiten reaccionar a acciones del usuario.

    //Input controlado: refleja exactamente el valor del estado. El DOM no tiene el control, React lo tiene.

    //Routing programatico(history.push): permite redirigir al usuario desde codigo, sin usar <Link>

    //Prevent default: Evita que el form recargue la pagina, manetniendo el comportamiento SPA


// CON QUE SE CONECTA ESTE COMPONENTE
    /*App.js */
    // tiene una ruta /busqueda que renderiza la screen Busqueda.js

    /*Busqueda.js */
    // dentro de esta screen se usa el componente Buscador

    /*Buscador.js */
    // Maneja el form, guarda lo escrito en state, y redirige a /resultados/:[loQueEscribio]