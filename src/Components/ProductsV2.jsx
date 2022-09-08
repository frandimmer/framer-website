import React from 'react'
import '../Styles/ProductsV2.css'

function ProductsV2() {
  return (
    <div className='products-container'>
      <div className='products-title-container'>
        <h1 className='title'>NUESTROS PRODUCTOS</h1>
      </div>
      <div className='products-subtitle-container'>
        <h1 className='subtitle'>ELECTROBOMBAS</h1>
      </div>
      <div className='products-images-container'>
        <img className='products-images-banner' src={require('../Images/Products/S4000.png')} alt="S4000" />
        <img className='products-images-banner' src={require('../Images/Products/S7000.png')} alt="S7000" />
        <img className='products-images-banner' src={require('../Images/Products/S15000.png')} alt="S15000" />
        <img className='products-images-banner' src={require('../Images/Products/S21000.png')} alt="S21000" />
      </div>
      <div className='products-subtitle-container'>
        <h1 className='subtitle'>MINISURTIDORES</h1>
      </div>
      <div className='products-images-container'>
        <img className='products-images-banner' src={require('../Images/Products/Minisurtidor S7000.png')} alt="Minisurtidor S7000" />
        <img className='products-images-banner' src={require('../Images/Products/Minisurtidor S15000.png')} alt="Minisurtidor S15000" />
        <img className='products-images-banner' src={require('../Images/Products/Minisurtidor S15000.png')} alt="Minisurtidor S21000" />
      </div>
      <div className='products-subtitle-container'>
        <h1 className='subtitle'>ACCESORIOS</h1>
      </div>
      <div className='products-images-container'>
        <img className='products-images-banner' src={require('../Images/Products/Caudalímetro Estándar.png')} alt="Caudalímetro Estándar" />
        <img className='products-images-banner' src={require('../Images/Products/Pico Manual.png')} alt="Pico Manual" />
        <img className='products-images-banner' src={require('../Images/Products/Pico Automático Grande.png')} alt="Pico Automático Grande" />
        <img className='products-images-banner' src={require('../Images/Products/Manguera.png')} alt="Manguera" />
      </div>
      <div className='products-button-container'>
          <a className='products-button' href="">VER TODOS LOS PRODUCTOS</a>
      </div>

    </div>
  )
}

export default ProductsV2

