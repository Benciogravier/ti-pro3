import React from 'react'
import './styles.css'

function Formulario() {
  return (
    <seccion>
    <main>
        <h3 className="titulo-form">Busca tu pelicula:</h3>
    </main>
    <form className='form'>
      <input type="text" placeholder="Buscar película..." />
      <button type="submit">Buscar</button>
    </form>
    </seccion>
  )
}

export default Formulario