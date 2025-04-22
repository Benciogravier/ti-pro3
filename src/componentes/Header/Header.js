import React from 'react';
import './styles.css';
import NavegacionMenu from './NavegacionMenu'; //importa el componenente que represeta cada item del menu de navegacion

function Header() {
  //Define los botones que aparecen en el menu. Cada objeto tiene:
    //name: el texto que se ve
    //path: a donde redirige cuando se clickea (URL)
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
      path: '/populares'
    },
    {
      name: "Cartelera",
      path: '/cartelera'
    },
    {
      name: "Busqueda",
      path: '/busqueda'
    }
  ]
  return (
    <React.Fragment>
      <nav>
        <div className='logo-titulo'>
          <img className="logo" src="./img/logo.jpg" alt="logo"/>
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

//se hace un .map() sobre el array elementos para generar un componente NavegacionMenu por cada item del menu
// se pasa data={elm} como prop al componente hijo

//Conceptos teoricos importantes:

  //Componentizacion: en vez de escribir el menu a mano, se crea un array y se usa .map() para automatizar

  //Props: se pasa un objeto a NavegacionMenu para que lo renderice

  //Reutilizacion: si queres agregar un nuevo item al menu, solo sumas una linea en el array