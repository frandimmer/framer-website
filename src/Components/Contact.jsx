import React from 'react'
import '../Styles/Contact.css'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div id='contact'>
      <div>
      <h1 className='contact-title-container'>CONTACTO</h1>
      </div>
      <div className='contact-container'>
        <ContactForm />
        <div className='bottom-section'>
          <div className='contact-numbers'>
            <img className='contact-logos' src={require('../Images/phone.png')}/>
            <h3>TELÉFONO: 3462423383</h3>
          </div>
          <div className='contact-numbers'>
            <img className='contact-logos' src={require('../Images/whatsapp.png')}/>
            <h3>WHATSAPP: 3462423383</h3>
          </div>
          <div className='contact-numbers'>
            <img className='contact-logos' src={require('../Images/mail.png')}/>
            <h3>E-MAIL: fdimmer@framer.com.ar</h3>
          </div>
          <div className='contact-numbers'>
            <img className='contact-logos' src={require('../Images/instagram.png')}/>
            <h3>INSTAGRAM: @framer.vt</h3>
          </div>
          <div className='contact-numbers'>
            <img className='contact-logos' src={require('../Images/pin.png')}/>
            <h3>UBICACIÓN: Pellegrini 1840, Venado Tuerto, Santa Fe</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact