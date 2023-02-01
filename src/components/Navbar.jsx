import React from 'react'
import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
      <div className=' top-8 left-0 right-0 h-[60px]' id='container'>
          <div className=' px-[20px] py-[10px] flex justify-between items-center' id='wrapper'>
              <div className=' flex-1 flex items-center' id='left'>
                  <div className='text-sm cursor-pointer'>EN</div>
                  <div className='flex ml-[25px] p-1 border-[0.5px] border-solid border-gray-300 items-center rounded-md' id='search-container'>
                      <input type="text" className=' border-none bg-transparent' placeholder='Search' />
                      <Search className=' text-gray-400 text-xs cursor-pointer'/>
                  </div>
              </div>
              <div className=' flex-1 text-center ' id='center'>
                  <h1 className='font-bold text-lg'>E-Commerce</h1>
              </div>
              <div className=' flex-1 flex justify-end items-center mr-2' id='right'>
                  <div className=' mx-6 text-sm cursor-pointer'>RESIGTER</div>
                  <div className=' mx-6 text-sm cursor-pointer'>SIGN IN</div>
                  <Badge badgeContent={4} color="primary" className=' cursor-pointer'>
                    <ShoppingCartOutlined />
                  </Badge>
              </div>
          </div>
      </div>
  )
}

export default Navbar