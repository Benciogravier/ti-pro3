import React from 'react'
import './styles.css'

function Formulario() {
  return (
    <section>
    <main>
        <h3 className="titulo-form">Busca tu pelicula:</h3>
    </main>
    <form className='form'>
      <input type="text" placeholder="Buscar película..." />
      <button type="submit">Buscar</button>
    </form>
    </section>
  )
}

export default Formulario