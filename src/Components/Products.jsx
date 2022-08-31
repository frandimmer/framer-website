import React from 'react'
import '../Styles/Products.css'
import ProductCard from './ProductCard'

function Products() {
	return (
		<div className='products-container'>
			<h1>NUESTROS PRODUCTOS</h1>
				<h2>ELECTROBOMBAS</h2>
				<p className='important-message'>IMPORTANTE: EL RENDIMIENTO FINAL DE LA ELECTROBOMBA ESTA DEFINIDO POR LOS ACCESORIOS QUE SE LE COLOCAN A LA MISMA</p>
				<div className='electrobombas'>
					<ProductCard 
					nombre='S4000'
					caudal='4000'
					entrada=''
					salida=''
					voltaje='12V'
					consumo=''
					/>
					<ProductCard 
					nombre='S7000'
					caudal='7000'
					entrada=''
					salida=''
					voltaje='12V o 24V'
					consumo=''
					/>
					<ProductCard 
					nombre='S15000'
					caudal='15000'
					entrada=''
					salida=''
					voltaje='12V'
					consumo=''
					/>
					<ProductCard 
					nombre='S21000'
					caudal='21000'
					entrada=''
					salida=''
					voltaje='12V o 24V'
					consumo=''
					/>
				</div>
				<h2>MINISURTIDORES</h2>
				<div className='minisurtidores'>
				<ProductCard 
					nombre='Minisurtidor S7000'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
					<ProductCard 
					nombre='Minisurtidor S15000'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
					<ProductCard 
					nombre='Minisurtidor S15000'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
				</div>
				<h2>ACCESORIOS</h2>
				<div className='accesorios'>
				<ProductCard 
					nombre='Minisurtidor S15000'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
				</div>		
		</div>
	)
}

export default Products