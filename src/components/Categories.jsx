import React from 'react'

import CategoryItem from './CategoryItem'
import { categories } from '../data'

const Categories = () => {
	return (
		<div className=' flex p-5 justify-between'>
			{categories.map(item => (
				<CategoryItem item={item} key={item.id}></CategoryItem>
			))}
		</div>
	)
}

export default Categories
