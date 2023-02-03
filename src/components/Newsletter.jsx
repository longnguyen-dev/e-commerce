import { Send } from '@mui/icons-material'
import React, { Fragment } from 'react'

const Newsletter = () => {
	return (
		<div className='h-[60vh] flex flex-col justify-center items-center bg-[#fcf5f5]'>
			<h1 className=' text-[70px] mb-5 font-semibold '>Newsletter</h1>
			<div className=' text-2xl font-light mb-5'>Get timely updates from your favorite products.</div>
			<div className=' w-[50%] h-12 m-3 bg-white flex justify-between border border-gray-300'>
				<input placeholder='Your email!' className='w-full pl-2'></input>
				<button className=' px-4 border-none bg-teal-500 shadow-sm font-semibold cursor-pointer flex justify-center items-center'>
					<Send />
				</button>
			</div>
		</div>
	)
}

export default Newsletter
