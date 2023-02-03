import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'

const Products = () => {
	return (
		<div className='flex flex-wrap p-5 justify-between'>
			{popularProducts.map(item => (
				<Product path={item.img} key={item.id} />
			))}
		</div>
	)
}

export default Products
