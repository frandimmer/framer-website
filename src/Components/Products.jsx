import React from 'react'
import '../Styles/Products.css'
import ProductCard from './ProductCard'

function Products() {
	return (
		<div className='products-container'>
			<h1>NUESTROS PRODUCTOS</h1>
				<h2>ELECTROBOMBAS</h2>
				<p className='important-message'>IMPORTANTE: EL RENDIMIENTO FINAL DE LA ELECTROBOMBA ESTA DEFINIDO POR LOS ACCESORIOS QUE SE LE COLOCAN A LA MISMA.</p>
				<div className='electrobombas'>
					<ProductCard
					electrobomba={true} 
					nombre='S4000'
					caudal='4000'
					entrada=''
					salida=''
					voltaje='12V'
					consumo=''
					/>
					<ProductCard
					electrobomba={true} 
					nombre='S7000'
					caudal='7000'
					entrada=''
					salida=''
					voltaje='12V o 24V'
					consumo=''
					/>
					<ProductCard
					electrobomba={true} 
					nombre='S15000'
					caudal='15000'
					entrada=''
					salida=''
					voltaje='12V'
					consumo=''
					/>
					<ProductCard
					electrobomba={true} 
					nombre='S21000'
					caudal='21000'
					entrada=''
					salida=''
					voltaje='12V o 24V'
					consumo=''
					/>
				</div>
				<h2>MINISURTIDORES</h2>
				<p className='important-message'>IMPORTANTE: LOS MINISURTIDORES INCLUYEN 4 MTS. DE MANGUERA Y PICO A ELECCIÓN (TAMBIÉN SE PUEDE PEDIR SIN ESTOS ACCESORIOS).</p>
				<div className='minisurtidores'>
				<ProductCard
					minisurtidor={true}
					nombre='Minisurtidor S7000'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
					<ProductCard
					minisurtidor={true} 
					nombre='Minisurtidor S15000'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
					<ProductCard
					minisurtidor={true} 
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
					nombre='Caudalímetro Estándar'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
				<ProductCard 
					nombre='Caudalímetro Grande'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
				<ProductCard 
					nombre='Pico Manual'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
				<ProductCard 
					nombre='Pico Automático Estándar'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
				<ProductCard 
					nombre='Pico Automático Grande'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
				<ProductCard 
					nombre='Manguera'
					caudal='0000'
					entrada='0'
					salida='0'
					voltaje='12V'
					consumo='0'
					/>
				<ProductCard 
					nombre='Filtro'
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