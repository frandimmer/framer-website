import React from 'react'
import '../Styles/ProductCard.css'

function ProductCard({ electrobomba, minisurtidor, accesorio, nombre, caudal, entrada, salida, voltaje, consumo }) {
  return (
    <div className='product-card'>
      <h3 className='product-title'>{nombre}</h3>
      <img className='product-image' src={require(`../Images/Products/${nombre}.png`)} alt={nombre} />
      
      {/* <p className='product-flow'>Caudal: {caudal} LTS/HORA</p>
      <p className='product-entrada'>Entrada: {entrada}"</p>
      <p className='product-salida'>Salida: {salida}"</p>
      <p className='product-salida'>Voltaje: {voltaje}</p>
      <p className='product-salida'>Consumo: {consumo}</p> */}

      {electrobomba ? (<div className='electrobomba-div'>
      <p className='product-description'>Caudal: {caudal} LTS/HORA</p>
      <p className='product-description'>Entrada: {entrada}"</p>
      <p className='product-description'>Salida: {salida}"</p>
      <p className='product-description'>Voltaje: {voltaje}</p>
      <p className='product-description'>Consumo: {consumo}</p>
      </div>) : ('')}

      {minisurtidor ? (<div className='electrobomba-div'>
      <p className='product-description'>Caudal: {caudal} LTS/HORA</p>
      <p className='product-description'>Entrada: {entrada}"</p>
      <p className='product-description'>Salida: {salida}"</p>
      <p className='product-description'>Voltaje: {voltaje}</p>
      <p className='product-description'>Consumo: {consumo}</p>
      </div>) : ('')}

      {accesorio ? (<div className='electrobomba-div'>
      <p className='product-description'>Caudal: {caudal} LTS/HORA</p>
      <p className='product-description'>Entrada: {entrada}"</p>
      <p className='product-description'>Salida: {salida}"</p>
      <p className='product-description'>Voltaje: {voltaje}</p>
      <p className='product-description'>Consumo: {consumo}</p>
      </div>) : ('')}

    </div>
  )
}

export default ProductCard