import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from './CartItems'
import { Link } from 'react-router-dom'
import { clearCart } from '../utils/cartSlice'
import { useState } from 'react'


const AddToCart = () => {
    const items=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
  
     const handleClearCart=()=>{
         dispatch(clearCart())
     } 

  return (
    <>
    <div className='flex justify-center border border-black p-2'>
    <Link to="/"><div className=' font-bold w-fit hover:text-blue-900 text-2xl cursor-pointer'>Home</div></Link> 
    </div>
    <div className='flex justify-center p-2 '>
        <div className='w-[150px] h-[30px] cursor-pointer bg-red-500 text-white font-bold text-center hover:bg-red-700 hover:font-bold ' onClick={()=>handleClearCart()}>Clear Cart</div>
    </div>
    <div className='flex justify-center'>
         <div className="p-2">
          {items.map((item)=><CartItems item={item}/>)}
          </div>
          </div>
    {/* <div className=' flex justify-center'>
        <div className='font-bold text-3xl w-fit'>Subtotal: {setTotal(item.price*item.quantity)}</div>
    </div> */}
    </>
  )
}

export default AddToCart