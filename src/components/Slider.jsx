import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useState } from 'react'

import { sliderItems } from '../data'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(2)
	const handleClick = direction => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
		}
		if (direction === 'right') {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
		}
		return
	}

	return (
		<div className='w-full h-screen flex relative'>
			<div
				className=' w-[50px] h-[50px] bg-gray-300 rounded-[50%] flex justify-center items-center absolute top-0 bottom-0 left-[10px] m-auto cursor-pointer opacity-50 z-20'
				onClick={() => handleClick('left')}
			>
				<ArrowLeftOutlined />
			</div>

			<div className={`h-full flex transit -translate-y-[${slideIndex * 100}vw]`}>
				{sliderItems.map(item => (
					<div key={item.id} className={classNames('w-screen h-screen flex items-center', `bg-[${item.bg}]`)}>
						<div className='flex-1 h-full flex items-center justify-end'>
							<img src={item.img} className='h-[70%] rounded-md' alt='slider-image' />
						</div>
						<div className='flex-1 p-12'>
							<h1 className=' text-7xl'>{item.title}</h1>
							<p className=' my-12 text-xl font-medium tracking-[3px]'>{item.desc}</p>
							<button className=' px-3 py-2 rounded border-[1px] bg-white text-gray-500 font-semibold cursor-pointer'>
								SHOP NOW
							</button>
						</div>
					</div>
				))}
			</div>

			<div
				className=' w-[50px] h-[50px] bg-gray-300 rounded-[50%] flex justify-center items-center absolute top-0 bottom-0 right-[10px] m-auto cursor-pointer opacity-50 z-20'
				onClick={() => handleClick('right')}
			>
				<ArrowRightOutlined />
			</div>
		</div>
	)
}

export default Slider
