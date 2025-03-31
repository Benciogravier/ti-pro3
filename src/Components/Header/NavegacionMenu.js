import React from "react";
//FALTA LO DE LOS LINKS --> react-router-dom (se hace dsp)

function NavegacionMenu(props) {
    return(
        <li>{props.data.name}</li> //Falta el link to = {elm.path}
    )
}

export default NavegacionMenu;