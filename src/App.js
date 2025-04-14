import React from "react";
import {Switch, Route} from "react-router-dom"
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Home from "./Screens/Home/Home";
import NotFound from "./Screens/NotFound/NotFound";
import Detalle from "./Screens/Detalle/Detalle";
import EnCartel from "./Screens/EnCartel/EnCartel";
import Favoritas from "./Screens/Favoritas/Favoritas";
import Busqueda from "./Screens/Busqueda/Busqueda";
import MasPopulares from "./Screens/MasPopulares/MasPopulares";


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
        <Route path={""} component={NotFound}/>
      </Switch>
      <Footer />
    </>
    
  );
}//busqueda es un query

export default App;
