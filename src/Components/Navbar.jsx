import React from "react";
import '../Styles/Navbar.css'
import logo from '../Images/logo-2.png'

const Navbar = () => (
    <div className="navbar-container">
        <img src={logo}
        className='navbar-logo'
        />
        <div className="navbar-buttons">
            <a  className="btn" href="http://www.google.com">NOSOTROS</a>
            <a className="btn" href="http://www.google.com">PRODUCTOS</a>
            <a className="btn" href="http://www.google.com">SERVICIOS</a>
            <a class='contact-btn' href="http://www.google.com">CONTACTO</a>
        </div>
    </div>
)

export default Navbar;