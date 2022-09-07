import React from 'react'
import '../Styles/ProductCardV2.css'

function ProductCardV2({ electrobomba, minisurtidor, accesorio, nombre, caudal, entrada, salida, voltaje, consumo }) {
  return (
    <div className='product-card-v2'>
      <img className='product-image-v2' src={require(`../Images/Products/${nombre}.png`)} alt={nombre} />
      <h3 className='product-title-v2'>{nombre}</h3>
      <button className='product-button-v2'>Ver características</button>
    </div>
  )
}

export default ProductCardV2