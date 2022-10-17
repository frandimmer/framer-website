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
          entrada='1/2"'
          salida='1/2"'
          caudal='4000 lts/h'
          voltaje='12v'
          peso='3,4 kg'
          consumo='16 amp/h'
          />
          <ProductCardV2
          electrobomba={true}  
          nombre='S7000'
          entrada='1"'
          salida='3/4"'
          caudal='7000 lts/h'
          voltaje='12v o 24v'
          peso='4,5 kg'
          consumo='12v: 22 amp/h 24v: 12 amp/h'
          />
          <ProductCardV2
          electrobomba={true}  
          nombre='S15000'
          entrada='2"'
          salida='1 1/2"'
          caudal='15000 lts/h'
          voltaje='12v'
          peso='9,5 kg'
          consumo='39 amp/h'
          />
          <ProductCardV2
          electrobomba={true}  
          nombre='S21000'
          entrada='2"'
          salida='1 1/2"'
          caudal='21000 lts/h'
          voltaje='12v o 24v'
          peso='11,5 kg'
          consumo='12v: 70 amp/h 24v: 40 amp/h'
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
          minisurtidor={true}
          entrada='1'
          salida='1'
          caudal='1'
          voltaje='1'
          peso='1'
          consumo='1'
          />
          <ProductCardV2 
          nombre='Minisurtidor S15000'
          minisurtidor={true}
          entrada='1'
          salida='1'
          caudal='1'
          voltaje='1'
          peso='1'
          consumo='1'
          />
          <ProductCardV2 
          nombre='Minisurtidor S15000'
          minisurtidor={true}
          entrada='1'
          salida='1'
          caudal='1'
          voltaje='1'
          peso='1'
          consumo='1'
          />
        </div>
      </div>
        <div className='products-subtitle-container'>
          <h1 className='subtitle'>ACCESORIOS</h1>
        </div>
        <div className='products-images-container'>
          <div className='accesorios-grid'>
            <ProductCardV2 
            nombre='Caudalímetro'
            caudalimetro={true}
            entrada=''
            salida=''
            />
            <ProductCardV2 
            nombre='Caudalímetro '
            caudalimetro={true}
            entrada=''
            salida=''
            />
            <ProductCardV2 
            nombre='Pico Manual'
            pico={true}
            corte='Manual'
            entrada=''
            salida=''
            />
            <ProductCardV2 
            nombre='Pico Automático'
            pico={true}
            corte='Automático'
            entrada=''
            salida=''
            />
            <ProductCardV2 
            nombre='Pico Automático '
            pico={true}
            corte='Automático'
            entrada=''
            salida=''
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

