import React from "react"
import image from "../images/photo-grid.png"
import "../style.css"
export default function Hero(){
    return(
        <div className="heroSection">
            
            <img className="heroImage" src={image}/>
            
            <div className="heroFont">
                <h1>Online Experiences</h1>
                <p>Join Unique interactive activities led By<br/>
                    one-of-kind hosts-all without leaving home.
                </p>
            </div>
        </div>
    );
}