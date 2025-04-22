import React, {Component} from 'react'
import './styles.css'

// QUE HACE?
// muestra un input para buscar una pelicula
// Guarda lo que el usuario escribe en state.
// Llama a una función pasada por props llamada filtro() cada vez que cambia el texto.
// Usa un formulario, pero evita el envío por defecto con preventDefault.

class FiltroForm extends Component{
  constructor(props){
    super(props)
    this.state={
      valorInput: '' //se guarda lo del usuario
    }
  }
// El constructor inicializa el estado interno.
// valorInput es lo que el usuario va escribiendo.
// Se actualiza con cada pulsación (input controlado).

  manejarSubmit(evento){
    evento.preventDefault(); // hace que cuando haces enter se procese lo del form antes de cambiar de pagina
  }
// Al presionar Enter, los formularios hacen submit y recargan la página por defecto.
// preventDefault() evita ese comportamiento y permite manejarlo con JS.

  controlarInput(evento){
    this.setState(
      {valorInput: evento.target.value},
      ()=> this.props.filtro(this.state.valorInput)
    )
    console.log(this.state.valorInput);
    
  }
// Cada vez que el usuario escribe, se actualiza el estado.
// Como setState es asíncrono, se pasa una función callback como segundo argumento.
// Esa función llama a this.props.filtro(...), que fue definida en el componente padre (ej: una screen) para aplicar el filtro.

  render(){
    return (
      <section>
      <main>
          <h3 className="titulo-form">Busca tu pelicula:</h3>
      </main>
      <form onSubmit={(evento)=> this.manejarSubmit(evento)} className='form'>
        <input onChange={(evento) => this.controlarInput(evento)} value={this.state.valorInput} />

      </form>
      </section>
  )
}

//<input value={...} />:	Es un input controlado, el valor lo define React (no el DOM).
//onChange:	Captura lo que escribe el usuario y actualiza el estado.
//form onSubmit:	Manejador para Enter, aunque en este caso no tiene acción directa.
//props.filtro(...):	Técnica muy común: el hijo le avisa al padre que algo cambió (callback ascendente).
}
export default FiltroForm

// CONCEPTOS CLAVE PARA EL EXAMEN

// Formulario controlado:	El valor del input está ligado al estado, no al DOM.
// Props como funciones:	Se pasa una función del padre al hijo para recibir información.
// Manejo de eventos (onChange, onSubmit):	Mecanismo de interacción React + DOM.
// Ciclo de renderizado controlado:	Cada cambio de estado genera un nuevo render.
// preventDefault():	Evita que el navegador haga cosas que romperían el flujo React (como recargar la página).