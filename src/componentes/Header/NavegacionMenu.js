import React from "react";
import { Link } from "react-router-dom"; //importa Link de React Router, que es como un <a> (etiqueta html tradicional para crear links y va a una URL) pero sin recargar la pagina

function NavegacionMenu(props) {
    return(
        <li>
            <Link to={props.data.path}>
                {props.data.name}
            </Link>
        </li> 
    )
}
//Recibe un props.data (objeto con name y path)
//Renderiza un elemento de lista (<li>)con un link que navega a path
//El texto visible es 'name'

export default NavegacionMenu;

// Conceptos teoricos clave:

    //Props: El componenete recibe datos desde el padre (Header) y los usa

    //Routing interno (Link): En lugar de usar <a href="".../> se usa <Link to=""../> para navegacion sin recarga de pagina

    //Reutilizacion: Un solo componente sirve para todos los botones del menu, sin repetir codigo