import { Facebook, Home, Instagram, Mail, Phone, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
	return (
		<div className='flex'>
			<div className='flex-1 flex-col p-5'>
				<h1 className='text-[48px] mb-5 font-semibold '>E-commerce</h1>
				<p className=' my-5 '>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, id libero! Pariatur quo molestias
					consectetur doloribus ex nulla? Expedita, impedit?
				</p>
				<div className='flex'>
					<div className=' w-10 h-10 rounded-[50%] text-white bg-[#3b5999] flex items-center justify-center mr-5'>
						<Facebook />
					</div>
					<div className=' w-10 h-10 rounded-[50%] text-white bg-[#e4405f] flex items-center justify-center mr-5'>
						<Instagram />
					</div>
					<div className=' w-10 h-10 rounded-[50%] text-white bg-[#55acee] flex items-center justify-center mr-5'>
						<Twitter />
					</div>
					<div className=' w-10 h-10 rounded-[50%] text-white bg-[#e50023] flex items-center justify-center mr-5'>
						<YouTube />
					</div>
				</div>
			</div>

			<div className=' flex-1 p-5'>
				<h1 className=' text-xl font-bold mb-7 '>Usefull Links</h1>
				<ul className='flex flex-wrap'>
					<li className=' w-[50%] mb-2'>Home</li>
					<li className=' w-[50%] mb-2'>Cart</li>
					<li className=' w-[50%] mb-2'>Man Fashion</li>
					<li className=' w-[50%] mb-2'>Accessories</li>
					<li className=' w-[50%] mb-2'>My account</li>
					<li className=' w-[50%] mb-2'>Order Tracking</li>
					<li className=' w-[50%] mb-2'>Wishlist</li>
					<li className=' w-[50%] mb-2'>Terms</li>
				</ul>
			</div>

			<div className=' flex-1 p-5'>
				<h1 className=' text-xl font-bold mb-7'>Contact</h1>
				<div className='  mb-3 flex items-center'>
					<Home className=' mr-2' /> 12345 Cach Mang Thang Tam, Phuong 12, Quan 10, TPHCM
				</div>
				<div className=' mb-3 flex items-center'>
					<Phone className=' mr-2' /> +84 0966260395
				</div>
				<div className='  mb-3 flex items-center'>
					<Mail className=' mr-2' /> contact@dev.com
				</div>
				<img src='http://i.ibb.co/Qfvn4z6/payment.png' alt='payment' className=' w-[50%]' />
			</div>
		</div>
	)
}

export default Footer
