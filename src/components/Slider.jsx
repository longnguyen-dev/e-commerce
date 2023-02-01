import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

import { slideItems } from '../data'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const Slider = () => {
	const [slide, setSlide] = useState()

	return (
		<div className='container w-full h-screen flex'>
			<div className='arrow w-12 h-12 bg-gray-400 rounded-[50%] flex justify-center items-center absolute top-[50%] left-2 cursor-pointer opacity-50'>
				<ArrowLeftOutlined />
			</div>

			<div className='wrapper flex '>
				{slideItems.map(slideItem => (
					<div
						id={slideItem.id}
						className={classNames('slide wrapper-image flex items-center w-screen', slideItem.background)}
					>
						<div className='img-container flex-1'>
							<img src={slideItem.path} />
						</div>
						<div className='info-container flex-1 p-12'>
							<h1 className=' text-7xl'>{slideItem.title}</h1>
							<p className=' text-lg my-12 font-normal tracking-widest	'>{slideItem.description}</p>
							<button className=' text-xl p-2 bg-transparent border-gray-500 border-solid border-2 cursor-pointer'>
								SHOP NOW
							</button>
						</div>
					</div>
				))}
			</div>

			<div className='arrow w-12 h-12 bg-gray-400 rounded-[50%] flex justify-center items-center absolute top-[50%] right-2 cursor-pointer opacity-50'>
				<ArrowRightOutlined />
			</div>
		</div>
	)
}

export default Slider
