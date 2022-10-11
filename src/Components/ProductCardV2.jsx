import { React, useState } from 'react'
import ProductModal from './ProductModal'
import '../Styles/ProductCardV2.css'

function ProductCardV2({ electrobomba, minisurtidor, accesorio, nombre, caudal, entrada, salida, voltaje, consumo, peso }) {
  
  const [modalState, setModalState] = useState(false);

  return (
    <div className='product-card-v2'>
      <div className='product-title-v2-container'>
      <h3 className='product-title-v2'>{nombre}</h3>
      {nombre === 'Caudalímetro' ? <h3 className='product-title-v2'>&nbsp;1"</h3> : ''}
      {nombre === 'Caudalímetro ' ? <h3 className='product-title-v2'>&nbsp;1 1/2"</h3> : ''}
      {nombre === 'Pico Automático' ? <h3 className='product-title-v2'>&nbsp;3/4"</h3> : ''}
      {nombre === 'Pico Automático ' ? <h3 className='product-title-v2'>&nbsp;1"</h3> : ''}
      {nombre === 'Manguera' ? <h3 className='product-title-v2'>&nbsp;1"</h3> : ''}

      </div>
      <div>
      <img className='product-image-v2' src={require(`../Images/Products/${nombre}.png`)} alt={nombre} />
      </div>
      <div>
      <button className='product-button-v2' onClick={() => setModalState(!modalState)}>VER PRODUCTO</button>
      </div>
      <ProductModal
      state={modalState}
      setState={setModalState}
      nombre={nombre}
      peso={peso}
      electrobomba={electrobomba}
      minisurtidor={minisurtidor}
      accesorio={accesorio}
      caudal={caudal}
      entrada={entrada}
      salida={salida}
      voltaje={voltaje}
      consumo={consumo}
      />
    </div>
  )
}



export default ProductCardV2
