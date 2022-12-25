import { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Empty from './Empty'
import actionCreators from './state'

export default function Cart() {
  const [total, settotal] = useState(0)
  const cart=useSelector(state=>state.cart)
  const obj=useSelector(state=>state.obj)
const dispatch= useDispatch()
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

    <div className="text-2xl font-bold text-center my-4 ">Cart</div>
    <div className="cart flex flex-wrap justify-around">
    {cart.empty?<Empty/>:cart.map((e)=>{
      const array=obj.filter((element)=>{
        return e.order== element.id
      })
      return <Link to='/more' onClick={()=>dispatch(actionCreators.itemChange(array[0]))}  key={array[0].title}>  <div className="box m-2 w-[250px] p-2 bg-blue-50 border-2 border-black rounded-md">
      <img className='h-[150px] m-auto' src={array[0].image} alt={array[0].title} />
      <h1 className="heading font-bold text-xl text-center">{array[0].title.slice(0,19)}...</h1>
      <p className="text-sm px-4 text-justify">{array[0].description.slice(0,55)}...</p>
      <div className="flex items-center ">
        <div className="w-[100%] flex justify-around">
          <p className="category text-sm font-bold">{array[0].category}</p>
          <p className="category text-sm font-bold">{array[0].rating.rate}/5.0</p>
        </div>
      </div>
        <div className="price p-2 text-sm px-4 flex items-center justify-between">
        <div className='text-lg font-bold mx-2'>₹ {array[0].price}</div>
        <div className="btns flex flex-col  justify-around w-1/2 m-auto">
<Link to='/order' ><div className="border-2 border-blue-500 m-auto text-blue-500 p-2 my-1 px-2 rounded-sm  hover:bg-blue-500 hover:text-white hover:border-white w-[90px] text-sm text-center">Pay {array[0].price}</div></Link>


</div>
    </div>
        </div>
        </Link>
    })}
    </div>
    <div className="btns flex  justify-around w-1/2 m-auto">
<Link to='/shop' className=''><div className="bg-blue-500 m-auto text-white p-2 my-1 px-8 rounded-sm mt-2 hover:bg-blue-700 ">Go Back to Shop</div></Link>

</div>
    </>
  )
}
