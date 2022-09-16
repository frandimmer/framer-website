import React, { useState } from "react";
import '../Styles/Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {BrowserView, MobileView} from 'react-device-detect';

function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
    <div>
        <div className="navbar-container">
                <img src={require('../Images/logo-2.png')}
                className='navbar-logo'
                alt="Framer logo"
                />
                <div className='navbar-buttons-container'>
                    <div className={click ? 'navbar-buttons active' : 'navbar-buttons'}>
                        <a onClick={handleClick} className="btn" href="#about">NOSOTROS</a>
                        <a onClick={handleClick} className="btn" href="#products">PRODUCTOS</a>
                        <a onClick={handleClick} className="btn" href="#services">SERVICIOS</a>
                        <a onClick={handleClick} class='contact-btn' href="#contact">CONTACTO</a>
                    </div>
                </div>
                <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#333'}} />) : (<FaBars size={20} style={{color: '#333'}} />)}
            </div>
        </div>
        
        <div className="whatsapp-button-container">
            <BrowserView>
                <a href="https://web.whatsapp.com/send?phone=%2B5493462659766&text&type=phone_number&app_absent=0">
                    <img className="whatsapp-button" src={require('../Images/whatsapp.png')} alt="Whatsapp button" />
                </a>
            </BrowserView>
            <MobileView>
                <a href="whatsapp://send?phone=5493462659766">
                    <img className="whatsapp-button" src={require('../Images/whatsapp.png')} alt="Whatsapp button" />
                </a>
            </MobileView>
        </div>
    </div>
    
    )
}
export default Navbar;


{/* <div>
    <div className="navbar-container">
        <img src={require('../Images/logo-2.png')}
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
        <a href="https://web.whatsapp.com/send?phone=%2B5493462659766&text&type=phone_number&app_absent=0">
            <img className="whatsapp-button" src={require('../Images/whatsapp.png')} alt="" />
        </a>
    </div>
</div> */}