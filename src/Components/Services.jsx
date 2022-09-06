import React from 'react'
import '../Styles/Services.css'
import ServicesCard from './ServicesCard'

function Services() {
  return (
    <div id='services' className='services-container'>
      <h1 className='services-title'>NUESTROS SERVICIOS</h1>
      <div className='services-grid'>
        <ServicesCard 
        name='GARANTÍA'
        img='warranty'
        text='Debido a que fabricamos productos de excelente calidad y de alto rendimiento, los mismos salen de fabrica con 1 año de garantía incluída, la cual resguarda a los diversos clientes de cualquier desperfecto o inconveniente que se pueda presentar por alguna falla ocurrida durante la fabricación del producto. '
        />
        <ServicesCard 
        name='REPARACIÓN'
        img='repair'
        text='Ofrecemos un servicio de reparación excepcional, lo que genera una gran confianza por parte de nuestros clientes. Recibimos productos con mas de 20 años de antigüedad los cuales son reparados integramente y salen de fábrica con la misma estética y rendimiento de un producto nuevo.'
        />
        <ServicesCard 
        name='ASESORAMIENTO'
        img='advice'
        text='Brindamos asesoramiento a todos nuestros clientes para que los mismos se encuentren satisfechos con el producto que obtienen y para que puedan elegir aquel que mas se adapte a sus necesidades.'
        />
      </div>
    </div>
  )
}

export default Services