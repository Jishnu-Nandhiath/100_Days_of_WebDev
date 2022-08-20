import React from "react";

import photo_grid from '../images/photo-grid.png'

export default function Hero(){
    return (
        <section>
            <img src={photo_grid} alt="grid" id="photo-grid"/>
            <h1>Online Experiences</h1>
            <p align="justify" className="section--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home. </p>
        </section>
    )
}