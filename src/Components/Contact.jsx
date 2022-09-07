import React from 'react'
import '../Styles/Contact.css'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div id='contact'>
      <div className='contact-title-container'>
      <h1 className='contact-title'>CONTACTO</h1>
      </div>
      <div className='contact-container'>
        <ContactForm />
        <div className='bottom-section'>
          <div className='contact-numbers'>
            <img className='contact-logos' src={require('../Images/phone.png')}/>
            <h3 className='contact-text'>TELÉFONO: 3462423383</h3>
          </div>
          <div className='contact-numbers'>
            <img className='contact-logos' src={require('../Images/whatsapp.png')}/>
            <h3 className='contact-text'>WHATSAPP: 3462423383</h3>
          </div>
          <div className='contact-numbers'>
            <img className='contact-logos' src={require('../Images/mail.png')}/>
            <h3 className='contact-text'>E-MAIL: fdimmer@framer.com.ar</h3>
          </div>
          <div className='contact-numbers'>
            <img className='contact-logos' src={require('../Images/instagram.png')}/>
            <h3 className='contact-text'>INSTAGRAM: @framer.vt</h3>
          </div>
          <div className='contact-numbers'>
            <img className='contact-logos' src={require('../Images/pin.png')}/>
            <h3 className='contact-text'>UBICACIÓN: Pellegrini 1840, Venado Tuerto, Santa Fe</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact