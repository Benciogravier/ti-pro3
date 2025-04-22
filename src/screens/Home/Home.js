import React from "react"
import Populares from "../../componentes/Populares/Populares";
import Cartelera from "../../componentes/Cartelera/Cartelera";

// QUE HACE?

// Importa los componentes Cartelera y Populares.
// Los renderiza secuencialmente dentro de un React.Fragment.
// No maneja estado, eventos, ni lógica: es una pantalla puramente estructural que compone contenido.
// Los componentes ya contienen logica propia(fetch, renderizado, etc)
// Actua como contenedor que delega tareas a componentes mas chicos

function Home(){
    return (
    <React.Fragment>
      <Cartelera />
      <Populares />
    </React.Fragment>
    )
}
// React.Fragment:	Componente invisible que permite devolver múltiples hijos sin usar un <div> innecesario.
// <Cartelera />	Sección de películas actualmente en cartel, cargadas desde TMDb.
// <Populares />	Sección de películas populares, también desde la API.


export default Home;

// CONCEPTOS CLAVE !!

// Composición:	Se combinan componentes reutilizables para armar una página completa.
// Responsabilidad única: Home no hace lógica: solo organiza la vista. La lógica está en los componentes internos.
// Reutilización de lógica:	Tanto Populares como Cartelera manejan su propio ciclo de vida (componentDidMount, fetch, state), y Home solo los muestra.
// Presentación modular:	Esto permite que el diseño y el código sean mantenibles y escalables.