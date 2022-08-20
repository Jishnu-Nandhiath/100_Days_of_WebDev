import React from "react";

import airbnb_logo from '../images/airbnb-logo.png'

export default function NavBar(){
    return(
        <nav>
        <img src={airbnb_logo} alt="airbnb-logo"/>
        </nav>
    )
}