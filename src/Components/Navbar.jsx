import React from "react";
import '../Styles/Navbar.css'
import logo from '../Images/logo.png'

const Navbar = () => (
    <div className="navbar-container">
        <img src={logo}
        className='navbar-logo'
        />
        <div className="navbar-buttons">
            <a href="http://www.google.com">NOSOTROS</a>
            <a href="http://www.google.com">PRODUCTOS</a>
            <a href="http://www.google.com">SERVICIOS</a>
            <a class='contact-button' href="http://www.google.com">CONTACTO</a>
        </div>
    </div>
)

export default Navbar;