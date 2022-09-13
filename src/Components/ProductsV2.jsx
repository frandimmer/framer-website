import React from 'react'
import '../Styles/ProductsV2.css'
import ProductCardV2 from './ProductCardV2'

function ProductsV2() {
  return (
    <div id='products' className='products-container'>
      <div className='products-title-container'>
        <h1 className='title'>NUESTROS PRODUCTOS</h1>
      </div>
      <div className='products-subtitle-container'>
        <h1 className='subtitle'>ELECTROBOMBAS</h1>
      </div>
      <div className='products-images-container'>
        <div className='electrobombas-grid'>
          <ProductCardV2
          electrobomba={true} 
          nombre='S4000'
          />
          <ProductCardV2
          electrobomba={true}  
          nombre='S7000'
          />
          <ProductCardV2
          electrobomba={true}  
          nombre='S15000'
          />
          <ProductCardV2
          electrobomba={true}  
          nombre='S21000'
          />
        </div>
      </div>
      <div className='products-subtitle-container'>
        <h1 className='subtitle'>MINISURTIDORES</h1>
      </div>
      <div className='products-images-container'>
        <div className='minisurtidores-grid'>
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
      </div>
        <div className='products-subtitle-container'>
          <h1 className='subtitle'>ACCESORIOS</h1>
        </div>
        <div className='products-images-container'>
          <div className='accesorios-grid'>
            <ProductCardV2 
            nombre='Caudalímetro Estándar'
            />
            <ProductCardV2 
            nombre='Caudalímetro Grande'
            />
            <ProductCardV2 
            nombre='Pico Manual'
            />
            <ProductCardV2 
            nombre='Pico Automático Estándar'
            />
            <ProductCardV2 
            nombre='Pico Automático Grande'
            />
            <ProductCardV2 
            nombre='Manguera'
            />
            <ProductCardV2 
            nombre='Filtro'
            />
          </div>
        </div>
    </div>
  )
}

export default ProductsV2

