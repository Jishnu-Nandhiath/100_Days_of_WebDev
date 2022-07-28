import React from "react";
import react_logo from '../images/react-logo.svg';


export default function Navbar(){
    return (
        <nav>
            <img src={react_logo} alt="react-logo"></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
 