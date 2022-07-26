import React from 'react'
import '../Styles/ServicesCard.css'

function ServicesCard({ name, img, text }) {
  return (
    <div className='services-card-container'>
      <div className='services-card-title-container'>
        <img className='services-logo' src={require(`../Images/${img}.png`)} alt='Service logo' />
        <h2 className='services-card-title'>{name}</h2>
      </div>
      <div>
        <p className='services-text'>{text}</p>
      </div>
    </div>
  )
}

export default ServicesCard