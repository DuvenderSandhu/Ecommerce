import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import actionCreators from './state'

export default function Cartitems(props) {
  const dispatch = useDispatch()
 const obj=props
 console.log(obj)
  return (
    <>
      <div className="cart flex flex-wrap">
        {obj.map((e)=>{return <Link to='/more' onClick={()=>dispatch(actionCreators.itemChange(e))}  key={e.title}>  <div className="box m-2 w-[250px] p-2 bg-blue-50 border-2 border-black rounded-md">
            <img className='h-[150px] m-auto' src={e.image} alt={e.title} />
            <h1 className="heading font-bold text-xl text-center">{e.title.slice(0,19)}...</h1>
            <p className="text-sm px-4 text-justify">{e.description.slice(0,55)}...</p>
            <div className="flex items-center ">
              <div className="w-[100%] flex justify-around">
                <p className="category text-sm font-bold">{e.category}</p>
                <p className="category text-sm font-bold">{e.rating.rate}/5.0</p>
              </div>
            </div>
              <div className="price p-2 text-sm px-4 flex items-center">
              <div className="discount line-through mx-2">₹ {e.price*2}</div>
              <div className="discount font-bold text-red-500 mx-2">50% Off</div>
              <div className='text-lg font-bold mx-2'>₹ {e.price}</div>
          </div>
              </div>
              </Link>})}
          
      </div>
      </>
    )
}
