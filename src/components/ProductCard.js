import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../utils/cartSlice'

const ProductCard = ({prod}) => {
    const dispatch=useDispatch()
    const handleAddToCart=()=>{
        dispatch(addToCart(prod))
    }
  return (
    <>
    <div  className='border border-black w-[300px] h-[250px] p-2 m-4'>
        <img src={prod.thumbnail} alt="loading" className='w-[400px] h-[100px] ' />
        <div className='text-center text-black font-bold m-3'>{prod.title.toUpperCase()}</div>
        <div className='flex justify-center m-4'><button className=' text-white font-medium w-[130px] h-[30px] bg-blue-700 rounded-lg text-center hover:bg-green-600 hover:text-white' onClick={()=>handleAddToCart()}>Add To Cart</button></div>
    </div>
    </>
  )
}

export default ProductCard