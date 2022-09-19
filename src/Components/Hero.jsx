import React from 'react'
import '../Styles/Hero.css'

function Hero() {
  return (
    <div className='hero-container'>
      <img className='hero-img' src={require('../Images/hero.png')} alt='Products' />
      <img className='hero-img-mobile' src={require('../Images/hero-mobile.png')} alt='Products' />
      <p className='hero-title'>LIDERES EN HERRAMIENTAS DE 12V Y 24V</p>
      <p className='hero-title-short'>MAS DE 25 AÑOS BRINDANDO SOLUCIONES AL SECTOR AGROPECUARIO</p>
    </div>
  )
}

export default Hero