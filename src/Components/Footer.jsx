import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='copyright-container'>
      <img className='copyright-img' src={require('../Images/logo-2.png')} alt="Framer logo" />
        <p>Copyright © 2022 Framer</p>
    </div>
  )
}

export default Footer