import React from 'react'; //importa la libreria base
import ReactDOM from 'react-dom/client'; //importa la nueva API de react DOM para crear el 'createRoot'
import App from './App';
import {BrowserRouter} from "react-router-dom" // Habilita el sistema de rutas de React Router DOM (navegar entre las pantallas con URLs)



const root = ReactDOM.createRoot(document.getElementById('root')); /*busca el elemento html y monta la app React en su luga */

root.render(
    <BrowserRouter> 
        <App />
    </BrowserRouter>
);
// renderiza el componente <App />, que ahora tiene acceso al sistema de rutas gracias a <BrowserRouter>


// En resumen este archivo INICIA LA APP
// Todo lo que veas en pantalla sale desde <App />
// Gracias a <BrowserRouter> podes usar rutas con <Routes>, <Route>, useNavigate