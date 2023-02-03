import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Product = ({ path }) => {
	return (
		<div className='group flex-1 m-1 min-w-[280px] h-[350px] bg-[#f5fbfd] flex items-center justify-center relative'>
			{/* Container */}
			<div className=' h-52 w-52 bg-white rounded-full absolute'>{/* Circle */}</div>
			<img src={path} className=' h-[75%] max-w-[200px] z-10 absolute'></img>
			<div className='z-20 absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear'>
				{/* Info */}
				<div className=' m-[10px] w-11 h-11 bg-white rounded-full flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-[#e9f5f5] hover:scale-110 cursor-pointer '>
					{/* Icon */}
					<ShoppingCartOutlined />
				</div>
				<div className=' m-[10px] w-11 h-11 bg-white rounded-full flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-[#e9f5f5] hover:scale-110 cursor-pointer'>
					<SearchOutlined />
				</div>
				<div className=' m-[10px] w-11 h-11 bg-white rounded-full flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-[#e9f5f5] hover:scale-110 cursor-pointer'>
					<FavoriteBorderOutlined />
				</div>
			</div>
		</div>
	)
}

export default Product
