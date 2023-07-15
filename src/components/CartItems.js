import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, decreasedFromCart, removeFromCart } from '../utils/cartSlice'

const CartItems = ({item}) => {
    const dispatch=useDispatch()

    const handleAddToCart=()=>{
        dispatch(addToCart(item))
    }

    const handleRemoveFromCart=(item)=>{
        dispatch(removeFromCart(item))

    }
    const handleDecreasedItem=(item)=>{
        dispatch(decreasedFromCart(item))
    }

  return (
       <>
       <div className='m-4 w-fit h-[250px]'>
        <div className='flex p-6'>
            <div>
            <img className='w-[150px] h-[150px] rounded-lg' src={item.thumbnail} alt="loading" />
            <div className='w-[150px] p-1 rounded-lg mt-4 bg-red-600 text-white text-center hover:underline hover:font-bold' onClick={()=>handleRemoveFromCart(item)}><button>Remove From Cart</button></div>
            </div>
            <div className='font-bold m-6 mt-14'>{item.title}</div>
            <div className='flex pl-[250px] pt-[40px] m-5'>
              <div><button className='mr-[25px]' onClick={()=>handleDecreasedItem(item)}>-</button></div> 
            <div className='mr-2 ml-2'>{item.quantity}</div>
            <div className='ml-[25px]'><button className='' onClick={()=>handleAddToCart(item)}>+</button></div></div> 
            <div className='font-bold text-3xl pt-12 pl-[300px]'>${item.price * item.quantity}</div>
        </div>
      
       </div>
       
       </>
  )
}

export default CartItems