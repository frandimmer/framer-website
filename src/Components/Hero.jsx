import React from 'react'
import '../Styles/Hero.css'
import hero from '../Images/hero-4.png'
import logo from '../Images/logo.png'

function Hero() {
  return (
    <div className='container'>
      <img className='hero-img' src={hero} />
      {/* <img  className='hero-logo' src={logo} /> */}
      {/* <p className='hero-logo-description'>Herramientas de 12v y 24v</p> */}
      <p className='hero-title'>LIDERES EN HERRAMIENTAS DE 12V Y 24V</p>
      <p className='hero-title-short'>MAS DE 25 AÑOS BRINDANDO SOLUCIONES AL SECTOR AGROPECUARIO</p>
    </div>
  )
}

export default Hero