import React from 'react'
import '../Styles/ContactForm.css'

function ContactForm() {
  return (
    <div className='form-container'>
      <form className='form'>
        <div>
          <label htmlFor="name">NOMBRE</label>
          <input type="text" id='name' name='name'/>
        </div>
        <div>
          <label htmlFor="e-mail">E-MAIL</label>
          <input type="email" id='e-mail' name='e-mail'/>
        </div>
        <div>
          <h3>MENSAJE</h3>
          <textarea />
        </div>
        <button className='submit-button' type='submit'>ENVIAR</button>
      </form>
    </div>
  )
}

export default ContactForm