import React from "react";

import swimmer_image from '../images/swimmer.png'
import star_icon from '../images/star.png'

export default function Card(){
    return (
        <div className="card">
            <img src={swimmer_image} alt="swimmer athlete" className="athlete--image"/>
            <div className="card--stats">
                <img src={star_icon} alt="icon" className="star"/>
                <span>5.0</span>
                <span className="grey">  (6) . USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b> From $136 </b>/ person</p>
        </div>
    )
}