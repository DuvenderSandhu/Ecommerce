import React from 'react'
import Emty from '../images/Empty.jpg'
export default function Empty() {
  return (
    <>
    <div className='flex flex-col min-h-[50vh]  text-black items-center'>
    <h1 className='font-bold text-2xl'>Your Cart is Empty</h1>
    <img className="w-1/3 h-1/3" src={Emty}/>
    <a href='/shop' className='text-blue-700 hover:underline text-lg'>Add/Shop From Here</a>
    </div>
    </>
  )
}
