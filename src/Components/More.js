import React from 'react'

import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from './state';
export default function More() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  let obj= useSelector(state=>state.item)
  console.log(obj)

  const token=useSelector(state=>state.token)
  async function addToCart(id){
    let url=`http://localhost/cart/${id}`
    console.log(url)
    console.log(token.token)
      const data=await fetch(url,{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token:token.token}),
    })
    const result=await data.json()
    console.log(result)
    if(result.requirement){
      const Status={
        status:true,
        heading:"Login Required",
        para:"Adding Item in Cart Required Login"
      }
      dispatch(actionCreators.alertStatus(Status))
      navigate('/login')
      }
    
    
    else{
      navigate('/cart')
      const Status={
        status:true,
        heading:"Success",
        para:result.alert
      }
      dispatch(actionCreators.alertStatus(Status))
    }
    
    
  }
  return (
    <>
    <nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <Link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Home
      </Link>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <Link to="/shop" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Shop</Link>
      </div>
    </li>
    
  </ol>
</nav>
<div className="text-2xl font-bold text-center my-4 ">{obj.title.slice(0,25)}...</div>
    <div className="px-4 flex justify-around items-center">
      <div className="img"><img className='w-[33vw] h-[60vh] my-4 rounded-md' src={obj.image} alt="IMg" /></div>
      <div className="detail w-[40vw]">
        <h1 className="font-bold text-2xl">{obj.title}</h1>
        <hr className='my-2'/>
        <p className="text-lg ">{obj.description}</p>
        <div className="price p-2 text-sm px-4 flex items-center">
            <div className="discount line-through mx-2"></div>
            <div className="discount font-bold text-red-500 mx-2"></div>
            <div className='text-2xl font-bold mx-2'>₹ {obj.price}</div>
        </div>
      </div>
      <div className="btns flex flex-col">
      <Link onClick={()=>{addToCart(obj.id)}} className="bg-blue-500 text-white p-2 my-1 px-8 rounded-sm mt-2 hover:bg-blue-700">Add to Cart</Link>
      <Link to="/order" className="bg-blue-500 text-white p-2 my-1 px-8 rounded-sm mt-2 hover:bg-blue-700">Buy Now</Link>
      </div>
    </div>
    
    </>
  )
}
