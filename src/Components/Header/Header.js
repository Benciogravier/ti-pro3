import React from 'react';
import './header.css';
import NavegacionMenu from './NavegacionMenu';

function Header() {
  let elementos = [
    {
      name: "Home",
      path: '/'
    },
    {
      name: "Favoritos",
      path: '/favoritos'
    },
    {
      name: "Populares",
      path: '/populares'
    },
    {
      name: "Cartelera",
      path: '/cartelera'
    },
    {
      name: "Ver todas",
      path: '/todas'
    }
  ]
  return (
    <React.Fragment>
      <nav>
        <div className='logo-titulo'>
          <img class="logo" src="./img/FALTA" alt="logo"/>
          <h1>Cuevana 4</h1>
        </div>
        <ul className='main-nav'>
          {elementos.map((elm,idx) => <NavegacionMenu key={`${idx} - ${elm.name}`} data={elm}/>)}
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Header;