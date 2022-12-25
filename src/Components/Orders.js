import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Orders() {
  let obj= useSelector(state=>state.item)
  const cart=useSelector(state=>state.cart)
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
    <li>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <Link to="/cart" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Cart</Link>
      </div>
    </li>
    
  </ol>
</nav>
<div className="text-2xl font-bold text-center my-4 ">Finalize Your Order</div>
<div className="orderDetail flex justify-around items-center">
 <div className="box m-2 text-white rounded-xl p-2 flex flex-col justify-center items-center w-[250px]  cursor-pointer ">
        <div className="img pt-1 "><img src={obj.image} className="overflow-hidden  min-h-[350px] min-w-[350px] m-auto h-[200px] w-[350px]   rounded-md " alt="Item"/></div>
        <div className="bottom min-h-[50px] w-[350px] bg-gray-900"><h1 className="font-bold text-xl text-center mt-2">{obj.title}</h1></div>
    </div> 
<div className="payment">
  <h1 className='font-bold text-xl text-center my-3'>Price BreakDown</h1>
  <div className="price w-[250px] border-2 border-gray-700 p-1 m-auto flex justify-between">Price: <span>₹ {obj.price}</span></div>
  <div className="price w-[250px] border-2 border-gray-700 p-1 m-auto flex justify-between">Price: <span>₹ {obj.price}</span></div>
  <div className="price w-[250px] border-2 border-gray-700 p-1 m-auto flex justify-between">Delivery Charges: <span>₹ 40</span></div>
  <div className="price w-[250px] border-2 border-gray-700 p-1 m-auto flex justify-between font-bold">Total: <span>₹ {parseInt(obj.price+41)}</span></div>
</div>
</div>
<div className="btns flex  justify-around w-1/2 m-auto">
<Link to='/shop' className=''><div className="border-2 border-blue-500 m-auto text-blue-500 p-2 my-1 px-8 rounded-sm mt-2 hover:bg-blue-500 hover:text-white hover:border-white w-[170px]">Back to shop</div></Link>
<Link to='/payment' className=''><div className="bg-blue-500 m-auto text-white p-2 my-1 px-8 rounded-sm mt-2 hover:bg-blue-700 w-[150px]">Pay {parseInt(obj.price+41)}</div></Link>


</div>
</>
)}
