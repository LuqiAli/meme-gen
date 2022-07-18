import React from "react";
import logo from "../img/troll.PNG"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="headerLogo" alt="logo"></img>
            <h2 className="headerH2">Meme Generator</h2>
            <h4 className="headerH4">React Course - Proj 3</h4>
        </header>
    )
}