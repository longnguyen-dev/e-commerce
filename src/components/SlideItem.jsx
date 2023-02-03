import React from 'react'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const SlideItem = ({ item, slideIndex }) => {
	return (
		<div key={slideIndex} className={classNames('w-screen h-screen flex items-center', `bg-[${item.bg}]`)}>
			<div className='flex-1 h-full flex items-center'>
				<img src={item.img} className='h-[70%] ' alt='slider-image' />
			</div>
			<div className='flex-1 p-12'>
				<h1 className=' text-7xl'>{item.title}</h1>
				<p className=' my-12 text-xl font-medium tracking-[3px]'>{item.desc}</p>
				<button className=' text-xl p-2 bg-transparent border-gray-500 border-solid border-2 cursor-pointer'>
					SHOP NOW
				</button>
			</div>
		</div>
	)
}

export default SlideItem
