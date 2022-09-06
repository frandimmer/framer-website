import React from 'react'
import '../Styles/Contact.css'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className='contact-container'>
      <h1>CONTACTO</h1>
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
        <img className='contact-logos' src={require('../Images/pin.png')}/>
        <h3>UBICACIÓN: Pellegrini 1840, Venado Tuerto, Santa Fe</h3>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact