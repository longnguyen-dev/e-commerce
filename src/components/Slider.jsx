import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

import { sliderItems } from '../data'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0)

	const handleClick = direction => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
		}
		if (direction === 'right') {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
		}
	}

	console.log(slideIndex)

	return (
		<div id='container' className='w-full h-screen flex relative overflow-hidden'>
			<div
				id='arrow-1'
				className=' w-[50px] h-[50px] bg-gray-300 rounded-[50%] flex justify-center items-center absolute top-0 bottom-0 left-[10px] m-auto cursor-pointer opacity-50 z-20'
				onClick={() => handleClick('left')}
			>
				<ArrowLeftOutlined />
			</div>

			<div id='wrapper' className={classNames('h-screen flex', `translate-x-[${slideIndex * -100}vw]`)}>
				{sliderItems.map(sliderItem => (
					<div
						key={slideIndex.id}
						className={classNames('w-screen h-screen flex items-center', `bg-[${sliderItem.bg}]`)}
					>
						<div id='img-container' className='flex-1 h-full flex items-center'>
							<img src={sliderItem.img} className='h-[70%] ' alt='slider-image' />
						</div>
						<div id='info-container' className='flex-1 p-12'>
							<h1 className=' text-7xl'>{sliderItem.title}</h1>
							<p className=' my-12 text-xl font-medium tracking-[3px]'>{sliderItem.desc}</p>
							<button className=' text-xl p-2 bg-transparent border-gray-500 border-solid border-2 cursor-pointer'>
								SHOP NOW
							</button>
						</div>
					</div>
				))}
			</div>

			<div
				id='arrow-2'
				className=' w-[50px] h-[50px] bg-gray-300 rounded-[50%] flex justify-center items-center absolute top-0 bottom-0 right-[10px] m-auto cursor-pointer opacity-50 z-20'
				onClick={() => handleClick('right')}
			>
				<ArrowRightOutlined />
			</div>
		</div>
	)
}

export default Slider
