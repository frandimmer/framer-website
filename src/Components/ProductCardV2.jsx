import React from 'react'
import '../Styles/ProductCardV2.css'

function ProductCardV2({ electrobomba, minisurtidor, accesorio, nombre, caudal, entrada, salida, voltaje, consumo }) {
  return (
    <div className='product-card-v2'>
      <div>
      <h3 className='product-title-v2'>{nombre}</h3>
      </div>
      <div>
      <img className='product-image-v2' src={require(`../Images/Products/${nombre}.png`)} alt={nombre} />
      </div>
      <div>
      <button className='product-button-v2'>VER PRODUCTO</button>
      </div>
    </div>
  )
}

export default ProductCardV2