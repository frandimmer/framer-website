import React from 'react'
import '../Styles/Products.css'
import ProductCard from './ProductCard'

function Products() {
	return (
		<div className='products-container'>
			<h1>NUESTROS PRODUCTOS</h1>
				<h2>ELECTROBOMBAS</h2>
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
				<div className='minisurtidores'>
				<h2>MINISURTIDORES</h2>
				</div>
				<div className='accesorios'>
				<h2>ACCESORIOS</h2>
				</div>		
		</div>
	)
}

export default Products