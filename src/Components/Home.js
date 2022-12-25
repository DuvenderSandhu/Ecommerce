import React from 'react'
import Why from './Why'
import Category from './Category'
import UpperFooter from './UpperFooter'
import Footer from './Footer'
import {Link} from "react-router-dom";
export default function Crousel() {
  document.title="Home - Ecommerce Website"
  return (
    <>
    <div className='bg-blue-50'>
    <div className="Crousel  w-[50%] m-auto h-[90vh] flex flex-col items-center justify-center ">
            <h1 className="text-5xl font-bold">Welcome to Shopping</h1>
            <p className="mt-6 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officiis mollitia fugit non voluptate quae. Delectus magnam, sed laborum praesentium, ullam culpa esse, sint quasi ea nulla aliquam voluptatibus debitis omnis possimus sequi expedita.</p>
            <Link to="/shop" className="bg-blue-500 text-white p-2 rounded-sm mt-2 hover:bg-blue-700">Shop Now</Link>
    </div>
    </div>
    <Why/>
    <Category/>
    <UpperFooter/>
    <Footer/>
    </>
  )
}
