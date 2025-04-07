import React from 'react';
import './styles.css';
import NavegacionMenu from './NavegacionMenu';

function Header() {
  let elementos = [
    {
      name: "Home",
      path: '/'
    },
    {
      name: "Favoritas",
      path: '/favoritas'
    },
    {
      name: "Populares",
      path: '/vertodas'
    },
    {
      name: "Cartelera",
      path: '/cartelera'
    },
    {
      name: "Ver todas",
      path: '/'
    }
  ]
  return (
    <React.Fragment>
      <nav>
        <div className='logo-titulo'>
          <img class="logo" src="./img/logo.jpg" alt="logo"/>
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