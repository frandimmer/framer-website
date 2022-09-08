import React from 'react'
import '../Styles/ProductsV2.css'
import ProductCardV2 from './ProductCardV2'

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
        <ProductCardV2 
        nombre='S4000'
        />
        <ProductCardV2 
        nombre='S7000'
        />
        <ProductCardV2 
        nombre='S15000'
        />
        <ProductCardV2 
        nombre='S21000'
        />
      </div>
      <div className='products-subtitle-container'>
        <h1 className='subtitle'>MINISURTIDORES</h1>
      </div>
      <div className='products-images-container'>
        <ProductCardV2 
        nombre='Minisurtidor S7000'
        />
        <ProductCardV2 
        nombre='Minisurtidor S15000'
        />
        <ProductCardV2 
        nombre='Minisurtidor S15000'
        />
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

