import React from 'react'
import { useRef } from "react";
import '../Styles/ContactForm.css'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kgfd7m9', 'template_7n72vlv', form.current, 'ir8EkJLQInlaYgvRs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <div className='form-container'>
      <form ref={form} className='form' onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">NOMBRE</label>
          <input type="text" id='name' name='from_name'/>
        </div>
        <div>
          <label htmlFor="e-mail">E-MAIL</label>
          <input type="email" id='e-mail' name='from_email'/>
        </div>
        <div>
          <h3>MENSAJE</h3>
          <textarea name='message' />
        </div>
        <div className='recaptcha'>
          <ReCAPTCHA
            sitekey="6LfLzNohAAAAAGiIaOg31ie6ViqLaPMiqRGugtrT"
            onChange={onChange}
          />
        </div>
        <button className='submit-button' type='submit' value='Send'>ENVIAR</button>
      </form>
    </div>

    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="from_name" />
    //   <label>Email</label>
    //   <input type="email" name="from_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>

  )
}

export default ContactForm