import React from "react";
import '../Styles/Navbar.css'
import logo from '../Images/logo-2.png'

const Navbar = () => (
    <div>
        <div className="navbar-container">
            <img src={logo}
            className='navbar-logo'
            />
            <div className="navbar-buttons">
                <a  className="btn" href="#about">NOSOTROS</a>
                <a className="btn" href="#products">PRODUCTOS</a>
                <a className="btn" href="#services">SERVICIOS</a>
                <a class='contact-btn' href="#contact">CONTACTO</a>
            </div>
        </div>
        <div className="whatsapp-button-container">
            <a href="https://wa.me/+5493462659766">
                <img className="whatsapp-button" src={require('../Images/whatsapp.png')} alt="" />
            </a>
        </div>
    </div>
)

export default Navbar;