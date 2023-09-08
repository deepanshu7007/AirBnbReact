import React from "react"
import ReactDOM from "react-dom"
import logo from "../images/airbnb-logo.png"
import "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function navbar() {
    return (
        <nav className="navbar">
            <img className="nav--image"src={logo}/>
        </nav>
    )
}