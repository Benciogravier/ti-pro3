import React, {Component} from 'react'
import './styles.css'

class FiltroForm extends Component{
  constructor(props){
    super(props)
    this.state={
      valorInput: '' //se guarda lo del usuario
    }
  }
  manejarSubmit(evento){
    evento.preventDefault(); // hace que cuando haces enter se procese lo del form antes de cambiar de pagina
  }

  controlarInput(evento){
    this.setState(
      {valorInput: evento.target.value},
      ()=> this.props.filtro(this.state.valorInput)
    )
    console.log(this.state.valorInput);
    
  }
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
}
export default FiltroForm