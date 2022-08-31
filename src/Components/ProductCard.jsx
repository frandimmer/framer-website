import React from 'react'
import '../Styles/ProductCard.css'

function ProductCard({ nombre, caudal, entrada, salida, voltaje, consumo  }) {
  return (
    <div className='product-card'>
      <h3 className='product-title'>{nombre}</h3>
      <img className='product-image' src={require(`../Images/Products/${nombre}.png`)} />
      <p className='product-flow'>Caudal: {caudal} LTS/HORA</p>
      <p className='product-entrada'>Entrada: {entrada}"</p>
      <p className='product-salida'>Salida: {salida}"</p>
      <p className='product-salida'>Voltaje: {voltaje}</p>
      <p className='product-salida'>Consumo: {consumo}</p>
      
    </div>
  )
}

export default ProductCard