import React from "react";
import {Switch, Route} from "react-router-dom"
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Home from "./Screens/Home/Home";
import NotFound from "./Screens/NotFound/NotFound";
import Detalle from "./Screens/Detalle/Detalle";
import EnCartel from "./Screens/EnCartel/EnCartel";
import MasPopulares from "./Screens/MasPopulares/MasPopulares";
import Busqueda from "./Screens/Busqueda/Busqueda";
import Favoritas from "./Screens/Favoritas/Favoritas";
import Resultados from "./Screens/Resultados/Resultados";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} exact={true} component={Home}/>
        <Route path={"/detalle/:id"} component={Detalle}/>
        <Route path={"/cartelera"} component={EnCartel}/>
        <Route path={"/populares"} component={MasPopulares} />
        <Route path={"/favoritas"} component={Favoritas}/>
        <Route path={"/busqueda"} component={Busqueda}/>
        <Route path={'/resultados/:busqueda'} component={Resultados} />
        <Route path={""} component={NotFound}/>
      </Switch>
      <Footer />
    </>
    
  );
}

export default App;
