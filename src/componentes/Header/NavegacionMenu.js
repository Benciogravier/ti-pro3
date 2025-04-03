import React from "react";
import { Link } from "react-router-dom";

function NavegacionMenu(props) {
    return(
        <li>
            <Link to={props.data.path}>
                {props.data.name}
            </Link>
        </li> 
    )
}

export default NavegacionMenu;