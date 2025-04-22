import React from "react";
import Buscador from "../../componentes/Buscador/Buscador";

// se muestra cuando el usuario navega a /busqueda
// renderiza el componente Buscador
// le pasa explicitamente la prop history, que Buscador necesita para redirigir

function Busqueda(props){
    console.log('props about us', props);
    return(
        <div>
            <h1>Resultado de búsqueda</h1>
            <Buscador history={props.history} />
        </div>
    )
}
// function Busqueda props: componente funcional que recibe props desde React Router (porque esta en una <Route>)

// props.history: es parte de los "props de enrutamiento" que vienen en React Router: permiten acceder a la navegacion

// <Buscador history={props.history} />: Pasa la funcion de navegacion a Buscador, que la usara para hacer push('/resultados/…')

export default Busqueda;

// CONEXION DE LA SCREEN CON LA APP
    /*App.js */
    // 	Tiene esta ruta definida: <Route path={"/busqueda"} component={Busqueda}/>

    /*Busqueda.js */
    // Renderiza el componente Buscador.

    /*Buscador.js */
    // Al hacer submit, redirige a /resultados/[término] gracias al history recibido.