import React from 'react'

const CategoryItem = ({ item }) => {
	return (
		<div className=' flex-1 m-1 h-[70vh] relative'>
			<img src={item.img} className='w-full h-full object-cover '></img>
			<div className=' absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center'>
				<h1 className=' font-bold text-4xl text-white mb-5'>{item.title}</h1>
				<button className=' px-3 py-2 rounded border-[1px] bg-white text-gray-500 font-semibold cursor-pointe'>
					SHOP NOW
				</button>
			</div>
		</div>
	)
}

export default CategoryItem
