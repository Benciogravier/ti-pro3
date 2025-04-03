import React from "react";
import {Switch, Route} from "react-router-dom"
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";
import Detalle from "./screens/Detalle/Detalle";
import VerTodas from "./screens/VerTodas/VerTodas";
import Favoritas from "./screens/Favoritas/Favoritas";
import Busqueda from "./screens/Busqueda/Busqueda";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} exact={true} component={Home}/>
        <Route path={"/detalle/:id"} component={Detalle}/>
        <Route path={"/vertodas"} component={VerTodas}/>
        <Route path={"/favoritas"} component={Favoritas}/>
        <Route path={"/busqueda"} component={Busqueda}/>
        <Route path={""} component={NotFound}/>
      </Switch>
      <Footer />
    </>
    
  );
}//busqueda es un query

export default App;
